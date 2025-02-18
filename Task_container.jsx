"use client";
import { useState } from "react"

export const Task_container = ({check_name})=>{
    const [isChecked, setIsChecked]=useState(false);

const handleOnChange =()=>{
    setIsChecked(!isChecked)
}

  
    return (
        <div className={"w-[345px] h-[62px] flex flex-row p-[16px] rounded-md bg-[#F9FAFB]"}>
             <div className="flex gap-2">
                <input type='checkbox' checked={isChecked} onChange={handleOnChange} className=" accent-gray-400 scale-150 text-black flex"/>
                <p className={`text-black ${isChecked ? "line-through": null}`}>{check_name}</p>
            </div>

    </div>
    )
}