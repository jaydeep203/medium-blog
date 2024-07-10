import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";


const Home = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if(!localStorage.getItem("token")){
       navigate("/signup");
    }

    axios.get(`${BACKEND_URL}/api/v1/user/me`, {
      headers:{
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then((Response) => {
        if(Response.data && Response.data.id){
          navigate("/blogs");
        }
        else{
          navigate("/signup");
        }
      })
      .catch((err:Error) => {
        console.log(err);
        navigate("/signup");
      })
      .finally(() => setLoading(false));


  }, [navigate]);

  if(loading){
    return (
      <div className="
        absolute
        w-screen
        h-screen
        flex
        items-center
        justify-center
      ">
          <Spinner />
      </div>
    )
  }

  return (
    <div>Home</div>
  )
}

export default Home