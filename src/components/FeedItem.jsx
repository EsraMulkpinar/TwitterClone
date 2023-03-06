import React, { useState } from 'react'
const FeedItem = ({ tweet }) => {
  const [index, setindex] = useState(29);
  const [isclicked, setisclicked] = useState(false);
  const IndexFun =() => {
    if(!isclicked){
      setindex(index+1)
      setisclicked(!isclicked)
    }
    if(isclicked){
      setindex(index-1)
      setisclicked(!isclicked)
    }
    
  }
  
  return (
    <div className="">
      <div className="flex items-start px-5 py-8 border space-x-3">
        <div className="w-16 h-16 ">
          <img className="rounded-full" src={tweet.avatar} alt="#" />
        </div>
        <div className="">
          <div className="flex">
            <div className="font-bold">{tweet.displayName}</div>
            <div className="ml-2 text-gray-light">@{tweet.username}</div>
          </div>
          <div className="flex  items-center">{tweet.content}</div>
          <div className="flex  items-center"> <img src={tweet.image} alt="" /></div>
         
          <div className="flex items-center  space-x-16 mt-1">
            <div className="flex items-center space-x-2 group">
            <svg className='w-7 h-7 p-1 text-gray-dark group-hover:text-primary-dark group-hover:bg-blue-200 rounded-full'  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
            </svg>
            <span className='text-gray-dark group-hover:text-primary-base'>5</span>
            </div>
            <div className="flex items-center space-x-2 group">
            <svg className='w-7 h-7 p-1 text-gray-dark group-hover:text-green-600 group-hover:bg-green-200 rounded-full' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
            </svg>
            <span className='text-gray-dark group-hover:text-green-600'>9</span>
            </div>
            <div className="flex items-center space-x-2 group">
            <button onClick={IndexFun}>
            <svg className='w-7 h-7 p-1 text-gray-dark group-hover:text-red-600 group-hover:bg-red-200  rounded-full' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </button>
            <span className='text-gray-dark group-hover:text-red-600'>{index}</span>
            </div>
           

            </div>
          </div>
          <div class="flex space-x-1 hover:bg-primary-light hover:text-primary-base p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          </div>
          
      </div>
      
    </div>
  )
}

export default FeedItem
