import React,{useState,useMemo} from 'react'

export default function UseMemoSample() {

    const [count, setcount] = useState(0);
    const [text, settext] = useState("");

    const expensiveCalc=(num)=>{
        console.log("calculating...");
        for(let i=0 ; i< 1000000000;i++){}
        return num * num
    };

    const squareValue=useMemo(()=>expensiveCalc(count),[count]) ;

  return (
    <div className=' flex flex-col place-content-center place-items-center w-full h-screen bg-green-400' >
      <h1>{count} </h1>
      <h1>{squareValue} </h1>
      <button onClick={()=> setcount(count +1)} >اضافه کردن count</button>
      <br /><br />
      <input
      type='text'
      value={text}
      onChange={(e)=>settext(e.target.value)}
        placeholder='تایپ کنید'
      />
    </div>
  )
}
