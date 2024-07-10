import axios from "axios"
import { Appbar } from "../components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    return (
        <div className="">
            <Appbar />
            <div className="flex justify-center w-full mt-8">
                <div className="max-w-screen-lg w-full">
                    <input type="text" onChange={(e) => setTitle(e.target.value)} className="border-b border-gray-200 text-gray-900 text-lg font-bold rounded-lg outline-none block w-full p-2.5 " placeholder="Title" />
                    <TextEditor onChange={(e) => {
                        setContent(e.target.value);
                    }} />
                    <button onClick={async() => {
                        const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                            title,
                            content
                        }, {
                            headers:{
                                Authorization: "Bearer " + localStorage.getItem("token")
                            }
                        });
                        navigate(`/blog/${response.data.id}`);
                    }} className="mt-4 inline-flex items-center px-5 py-2.5 font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                        Publish post
                    </button>
                </div>
            </div>
        </div>
        
    )
}


function TextEditor({onChange}: {onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}){

    return (
        
        <div>
            
            <div className="w-full mb-4 pt-6">
                <div className="py-2 bg-white rounded-b-lg border-b">
                    <label className="sr-only">Publish post</label>
                    <textarea onChange={onChange} className="block w-full h-96 px-2 text-sm text-gray-800 bg-white border-0  outline-none" placeholder="Write an article..." required />
                </div>
            </div>
            
        </div>

    )
}