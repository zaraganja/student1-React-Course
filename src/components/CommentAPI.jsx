import axios from 'axios'
// import React from 'react'
// 1. npm axios
// 2. fetch 
const CommentAPI = () => {
    const getPostsGet= async()=>{
        await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }

    const getPostsByPost= async()=>{
        await axios.post("https://jsonplaceholder.typicode.com/posts",{
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then((response)=>{
            console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div className=' flex flex-row gap-5 px-20 mt-10 bg-violet-300' >
        <button onClick={()=>getPostsGet()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>getPosts</button>
        <button onClick={()=>getPostsByPost()} className=' border border-black shadow-lg hover:bg-white w-[100px] '>getPostsbyPost</button>

    </div>
  )
}

export default CommentAPI