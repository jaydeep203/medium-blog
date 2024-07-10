
import { BlogCard } from '../components/BlogCard'
import { Appbar } from '../components/Appbar'
import { useBlogs } from '../hooks'
import { BlogsSkeleton } from '../components/BlogSkeleton';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BACKEND_URL } from '../config';
import axios from 'axios';

const Blogs = () => {

    const {loading, blogs} = useBlogs();
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

    if(loading){
        return <div>
            <Appbar />
         <div className='flex flex-col mt-20 items-center justify-center'>
            <BlogsSkeleton />
            <BlogsSkeleton />
            <BlogsSkeleton />
        </div>
        </div>
    }

  return (
    <div>
        <Appbar />
    <div className='flex justify-center'>
    <div className=''>
        {blogs.map((blog, index) => (
            <BlogCard
                id={blog.id}
                key={index}
                authorName={blog.author.name || "Anonymous"}
                title={blog.title}
                content={blog.content}
                publishedDate='07 July 2024'
            />
        ))}
        
        
    </div>
    </div>
    </div>
  )
}

export default Blogs