import { useNavigate, useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { FullBlog } from "../components/FullBlog";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { Appbar } from "../components/Appbar";
import { useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Blog = () => {
    const navigate = useNavigate();

    useEffect(() => {

        if(!localStorage.getItem("token")){
           navigate("/signin");
        }
    
        axios.get(`${BACKEND_URL}/api/v1/user/me`, {
          headers:{
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        })
          .then((Response) => {
            if(!Response.data && !Response.data.id){
              navigate("/signin");
            }
          })
          .catch((err:Error) => {
            console.log(err);
            navigate("/signin");
          });
    
    
    }, [navigate]);

    const {id} = useParams();
    const {loading, blog} = useBlog({
        id: id || ""
    });

    if(loading || !blog){
        return <div>
            <Appbar />
            <BlogSkeleton />
        </div>
    }


    return (
        <div>
            <FullBlog blog={blog} />
        </div>
    )
}