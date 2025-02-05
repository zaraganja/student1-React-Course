import React,{useState,useEffect,useCallback} from 'react'


const todos =[
    {id:0,content:"text0"},
    {id:1,content:"text1"},
    {id:2,content:"text2"},
    {id:3,content:"text3"},
    {id:4,content:"text4"}
]

const UseCallBackSample = () => {
    const [count, setcount] = useState(0);
    const [reverseCount, setreverseCount] = useState(100)

    const getTodos=useCallback(()=>{
        return todos[count]
    },[count])
    
  return (
    <div className=' w-full h-screen flex flex-col bg-yellow-500 place-content-center place-items-center' >
        <p>{reverseCount} </p>
        <button className=' border border-red-500 p-10 mb-5' onClick={()=>setreverseCount(reverseCount-1)} >منهای یک</button>
      <button className=' border border-black p-10' onClick={()=>setcount(count+1)} >اضافه کن</button>
      <p>{count}</p>
        <TodoSection getTodos={getTodos} />
    </div>
  )
}


const TodoSection =(props)=>{
    const [todos, settodos] = useState([]);

    useEffect(() => {
     settodos([...todos,props.getTodos()]);
     console.log("gettodos function called")
    }, [props.getTodos])

    return(
        <div>
            {todos?.map((item,index)=>{
                return(
                    <p key={index} >
                        {item.content}
                    </p>
                )
            })}
        </div>
    )
    
}

export default UseCallBackSample
