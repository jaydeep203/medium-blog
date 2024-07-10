import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface BlogCardProps{
    id:string,
    authorName: string;
    title: string;
    content:string;
    publishedDate: string;
}

function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}

export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {

    return(
        <Link to={"/blog/"+id}>
        <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md cursor-pointer">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="
                    font-extralight 
                    pl-2 
                    text-sm
                    flex
                    justify-center
                    flex-col
                ">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                     <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500">
                   {publishedDate}
                </div>
            </div>
            <div className="
                text-xl
                font-semibold
                pt-2
            ">
                {title}
            </div>
            <div className="
                text-md font-thin
            ">
                {content.slice(0,100) + "..."}
            </div>
            <div className="
                text-slate-500
                text-sm
                font-thin
                pt-4
            ">
                {Math.ceil(content.length/100)} minute(s)
            </div>
            
        </div>
        </Link>
    )

}

export function Avatar({name, size="small"}:{ name:string, size?:"small" | "big" }) {

    return <div 
        className={twMerge(`
            relative 
            inline-flex 
            items-center 
            justify-center 
            overflow-hidden 
            bg-gray-600 
            rounded-full
        `, 
         size === "small" ? "w-6 h-6" : "w-10 h-10" 
        )}>
    <span 
        className={twMerge(`
            font-xs font-extralight
            text-gray-600 
            dark:text-gray-300
        `,
        size==="small" ? "text-xs" : "text-md"
    )}>
            {name[0]}
    </span>
</div>
} 