export const Buttons=({className, text})=>{
return(    
<button className = {` h-[32px] bg-slate-500 rounded-[6px] border-solid px-[12px] py-[4px] flex items-center justify-center ${className}`} >
{text}
    </button>
    )
}