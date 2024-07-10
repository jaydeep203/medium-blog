import {SignupInput } from "@jaydeep203/medium-blog-common";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { BACKEND_URL } from "../config";

export const Auth = ({type}:{type:"signup" | "signin"}) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name:"",
        username:"",
        password:""
    });

    async function sendRequest(){

        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type==="signup"?"signup":"signin"}`, postInputs);
            const { jwt } = response.data;
            console.log(jwt);
            localStorage.setItem("token", jwt);
            navigate("/blogs");

        }catch(err){
            console.log(err);
            alert("Error while Signup.")
        }
        

    }

    return (
    <div className="
        h-screen
        flex
        justify-center
        flex-col
    ">
        <div className="
            flex justify-center
        "> 
        <div>
            <div className="px-10">
                <div className="
                    text-3xl
                    font-extrabold
                "> 
                    {type==="signup" ? "Create an account" : "Login"}
                </div>
                <div className="
                    text-slate-400
                ">
                    {type==="signup" ? "Already have an account?" : "Don't have an account?"}
                    <Link className="pl-2 underline" to={type==="signup" ? "/signin" : "/signup"}>
                        {type==="signup" ? "Sign In" : "Sign Up"}
                    </Link>
                </div>
            </div>
            <div className="p-6">
                {
                    type==="signup" && (
                        <LabelledInput 
                            label="Name"
                            placeholder="Type Your Name"
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name:e.target.value
                                });
                            }}
                        />
                    )
                }
                <LabelledInput 
                    label="Username"
                    placeholder="Type Your Username"
                    onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            username:e.target.value
                        });
                    }}
                />
                <LabelledInput 
                    type="password"
                    label="Password"
                    placeholder="Type Your Password"
                    onChange={(e) => {
                        setPostInputs({
                            ...postInputs,
                            password:e.target.value
                        });
                    }}
                />
                <button 
                    onClick={sendRequest}
                    type="button" 
                    className="
                        mt-6
                        text-white 
                        bg-gray-800 
                        hover:bg-gray-900 
                        focus:outline-none 
                        focus:ring-4 
                        focus:ring-gray-300 
                        font-medium rounded-lg 
                        text-sm px-5 py-2.5 
                        me-2 mb-2 
                        dark:bg-gray-800 
                        dark:hover:bg-gray-700 
                        dark:focus:ring-gray-700 
                        dark:border-gray-700
                    ">{type==="signup" ? "Signup" : "Signin" }</button>
            </div>
        </div>    
        </div>
    </div>
    )
}

interface LabelledInputType{
    label:string;
    placeholder: string;
    type?: string;
    onChange: (e:ChangeEvent<HTMLInputElement>) => void;
}

function LabelledInput({type, label, placeholder, onChange}:LabelledInputType){
    return (
        <div className="my-3">
            <label className="
                block mb-2 text-sm 
                text-black
                font-semibold
            ">
                {label} 
            </label>
            <input type={type || "text"} 
                className="
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900 text-sm 
                    rounded-lg focus:ring-blue-500 
                    focus:border-blue-500 block 
                    w-full p-2.5
                " 
                placeholder={placeholder} 
                required
                onChange={onChange}
            />
        </div>
    );
}