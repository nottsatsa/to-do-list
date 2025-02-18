export const Input=({task_name})=>{

    return(    
    <input onChange= {task_name} className = {` h-[40px] w-[280px] bg-white rounded-[6px] border-[1px] border-solid border-black px-[12px] py-[4px] flex text-black`} placeholder="Add new task ...">
        </input>
        )
    }