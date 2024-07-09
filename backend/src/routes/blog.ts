import {Hono} from "hono";
import {PrismaClient} from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@jaydeep203/medium-blog-common";

export const blogRouter = new Hono<{
    Bindings:{
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables:{
      userId:string;
    }
}>();

blogRouter.use("/*", async(c, next) => {

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
      c.set("userId", response.id as string);
      await next();
  } 
  else {
    c.status(403);
    return c.json({error: "Unauthorized."});
  }


});



blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body = await c.req.json();
    const authorId = c.get("userId");

    const {success} = createBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correct"
      });
    }
  
    const blog = await prisma.post.create({
      data:{
        title:body.title,
        content:body.content,
        authorId:authorId
      }
    });
  
  
    if(!blog){
      c.status(400);
      return c.json({
        msg:"Unable to create blog"
      });
    }
    c.status(200);
    return c.json(blog);
  });
  
  blogRouter.put('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();

    const {success} = updateBlogInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({
        message: "Inputs not correctl"
      });
    }

    const blog = await prisma.post.update({
        where:{
          id: body.id
        },
        data:{
           title: body.title,
           content: body.content
        }
    });

    return c.json({
      blog
    });
    
  });

  blogRouter.get('/bulk', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const blogs = await prisma.post.findMany();

    console.log(blogs);

    return c.json({
      blogs
    });
  });
  
  blogRouter.get('/:id', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const id = await c.req.param("id");

    try{

      const blog = await prisma.post.findUnique({
          where:{
            id: id
          }
      });

      return c.json({
        blog
      });

    }catch(err) {
       c.status(411);
       console.log(err);
       return c.json({
          msg: "Error while fetching blog post."
       });
    }
    

  });
  
  