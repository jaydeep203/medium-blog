import {Hono} from "hono";
import {PrismaClient} from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign, verify } from "hono/jwt";
import { signinInput, signupInput} from "@jaydeep203/medium-blog-common";
// import {z} from "zod";


export const userRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


userRouter.get("/me", async(c) => {

    const authHeader = await c.req.header("authorization") || "";
    if(!authHeader || !authHeader.startsWith("Bearer ")){
      c.status(400);
      return c.json({
        msg:"You are not authenticated."
      });
    }

    const token = authHeader.split(" ")[1];

    const response = await verify(token, c.env.JWT_SECRET);
    if(response && response.id){
        c.status(200);
        return c.json({
            id:response.id
        });
    } 
    else {
      c.status(403);
      return c.json({error: "Unauthorized."});
    }
})

userRouter.post('/signup', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  

    const {name, username, password} = await c.req.json();

    const res = signupInput.safeParse({
      name,
      username,
      password
    });


    if(!res.success){
      c.status(411);
      return c.json({
        message: "Inputs not correctl"
      });
    }
  
    try{
      const user = await prisma.user.create({
        data:{
          email:username,
          password: password,
          name: name
        }
      });
  
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  
  
      return c.json({
        jwt:token
      });
  
    }
    catch(error){
        c.status(411);
        return c.json({msg:" Invalid details."});
    }
    
  
    
  });
  
  userRouter.post('/signin', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
  
    const {username, password} = await c.req.json();

    const res = signinInput.safeParse({
      username,
      password
    });

    if(!res.success){
      c.status(411);
      return c.json({
        message: "Inputs not correctl"
      });
    }
  
    const user = await prisma.user.findUnique({
      where:{
        email:username,
        password:password
      }
    });
  
    if(!user){
      c.status(403);
      return c.json({error:"user not found."});
    }
  
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  
  
    return c.json({
      jwt:token
    });
  
  });

