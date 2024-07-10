import { useEffect, useState } from "react";
import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "../components/Spinner";

export const Signin = () => {

    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("token")){
     
            axios.get(`${BACKEND_URL}/api/v1/user/me`, {
            headers:{
                Authorization: "Bearer " + localStorage.getItem("token")
            }
            })
            .then((Response) => {
                if(Response.data && Response.data.id){
                    navigate("/blogs");
                }
            })
            .finally(() => setLoading(false));
        }
        else{
            setLoading(false);
        }

    },[navigate]);

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
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                    <Auth type={"signin"} />
                </div>
                <div className="hidden lg:block">
                    <Quote />
                </div>
            </div>
        </div>
    )
}