
export const BlogSkeleton = () => {

    return (
            <div className="flex justify-center animate-pulse">
                <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl"> 
                    <div className="col-span-8">
                        <div className="text-5xl font-extrabold">
                            <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                            <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="text-slate-500 pt-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        </div>
                        <div className="pt-2">
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <div className="text-lg text-slate-600">
                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                        </div>
                        <div className="flex">
                            <div className="pr-4 flex flex-col justify-center">
                                <svg className="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                </svg>
                            </div>
                            <div>
                                <div className="text-xl font-bold">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                </div>
                                <div className="pt-2 text-slate-500">
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div> 
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
    )

}

export const BlogsSkeleton = () => {
    return (

        <>

        <div className="border-b border-slate-200 p-4 w-screen max-w-screen-md">
            <div className="flex animate-pulse">
                <svg className="w-8 h-8 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                <div className="
                    font-extralight 
                    pl-2 
                    text-sm
                    flex
                    justify-center
                    flex-col
                ">
                    <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                </div>
                <div className="flex justify-center flex-col pl-2">
                     <circle />
                </div>
                <div className="pl-2 font-thin text-slate-500">
                    <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
                </div>
            </div>
            <div className="
                text-xl
                font-semibold
                pt-2
            ">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            </div>
            <div className="
                text-md font-thin
            ">
                <div className="w-32 h-2 bg-gray-200 rounded-full"></div>
            </div>
            <div className="
                text-slate-500
                text-sm
                font-thin
                pt-4
            ">
                <div className="h-2.5 bg-gray-300 rounded-full w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
            
        </div>

       </>
    )
}