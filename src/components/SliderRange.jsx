import {useState} from 'react'
import Button from './Button';

const SliderRange = () => {
    const [value, setvalue] = useState(1)
    const showRange=(event)=>{
        console.log(event.target.value);
        let myvalue=event.target.value;
        // document.getElementById("showValueSection").innerText=myvalue+"%"
        setvalue(myvalue);
    }
  return (
    <div className=' w-full h-screen flex flex-col place-items-center place-content-center bg-slate-400'>
        <input type="range" min={1} max={200} onChange={(event)=> showRange(event)} />
        {/* <h1 id='showValueSection' ></h1> */}
        <h1>{value}%</h1>
        <Button location={"slider"} />
        {/* برای یک کامپوننت هرجایی یک پراپس دادی همه جا باید اون پراپس رو براش تعریف کنی وگرنه یا ارور میده */}
        {/* یا undefiend  */}
    </div>
  )
}

export default SliderRange