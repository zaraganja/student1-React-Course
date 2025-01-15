import { useRef,useState } from "react"

const LearnUseref = () => {
const inputref= useRef(null);
const [renderCount, setrenderCount] = useState(0);
const mutableCounter=useRef(0);

const incrementCounter=()=>{
  mutableCounter.current += 1; 
  // => mutableCounter.current = mutableCounter.current +1 

}
const triggerRender =()=>{
  setrenderCount(renderCount +1)
}
  return (
    <div>
      <input type="text" ref={inputref} className=" border w-52 h-10 border-black ml-10 " />
      <button className=" ml-4 border border-r-green-400" onClick={()=> inputref.current.focus()} >focus on my input</button>
   <div>
    <h1>برای نگهداری مقادیر قابل تغییر بدون رندر مجدد که از کاربرد های useref هست </h1>
    <h1>هدف اینه که نشون بدم با افزایش مقدار رف صفحه دوباره رندر نمیشه</h1>
    <p>تعداد رندر صفحه {renderCount} </p>
    <p>متغیر ذخیره شده در useref: {mutableCounter.current} </p>
    <button className=" bg-white p-10" onClick={incrementCounter} >افزایش مقدار متغیر</button><br /><br />
    <button className=" bg-red-400 p-14" onClick={triggerRender} >رندر دوباره ی صفحه </button>
   </div>
    </div>
  )
}

export default LearnUseref
