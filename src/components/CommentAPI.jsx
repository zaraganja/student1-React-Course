import axios from 'axios'
 import {useState ,useEffect } from 'react'
import Loading from './Loading'
// 1. npm axios
// 2. fetch 
const CommentAPI = () => {

    const [showLoading, setshowLoading] = useState(false);


    const getPostsGet= async()=>{
        setshowLoading(true);
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
            setmyArray(response.data);
            setshowLoading(false);
        }).catch((error)=>{
            console.log(error);
            setshowLoading(false);
        })
    }

    const getPostsByPost= async()=>{
        setshowLoading(true);
        await axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then((response)=>{
            console.log(response.data);
            setshowLoading(false);
        }).catch((err)=>{
            console.log(err);
            setshowLoading(false);
        })
    }
    const [myArray, setmyArray] = useState([]);
    const [myObject, setmyObject] = useState({});

    const fetchByGet =async ()=>{
        setshowLoading(true);
        await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((response)=>response.json()).then((json)=>{
            console.log(json);
            setmyArray(json);
            setshowLoading(false);
            // myArray=json;
        }).catch((err)=>{
            console.log(err);
        })
    }

    const fetchByPost=async()=>{
        setshowLoading(true);
        await fetch("https://jsonplaceholder.typicode.com/posts",{
            method: 'POST',
            headers:{
                Accept : 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title:'foo',
                body: 'bar',
                userId:1
            })
        }).then((res)=> res.json()).then((json)=> {
            console.log(json);
            setmyObject(json);
            setshowLoading(false);
        }
        ).catch((err)=> {
            console.log(err)
            setshowLoading(false)
        }
           
        )

    }
    
    useEffect(() => {
        getPostsGet();
        // fetchByPost();
    }, [])


    

  return (
    <div className=' flex flex-col gap-5 px-20 mt-10 bg-violet-300 w-full h-auto' >
        <Loading loading={showLoading} />
        {/* <button onClick={()=>getPostsGet()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>getPosts</button> */}
        {/* <button onClick={()=>getPostsByPost()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>getPostsbyPost</button> */}
        {/* <button onClick={()=>fetchByGet()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>fetchByGet</button> */}
        {/* <button onClick={()=>fetchByPost()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>fetchByPost</button> */}
        {/* <h1>test header</h1> */}
        {myArray?.map((item,index)=>{
            return(
                <h1 className=' border border-black text-black' key={index} >{item.title}tttt </h1>
            )
        })

        }



    </div>
  )
}

export default CommentAPI