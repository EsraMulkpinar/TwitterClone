import React from 'react'

const UserBox = () => {
  return (
    <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-9 transform transition-colors duration-200">
      <img
        className="w-11 h-11 rounded-full"
        src="https://pbs.twimg.com/profile_images/1534548309901205504/9SBUTuHZ_400x400.jpg"
        alt="#"
      />
      
      <div className="hidden flex-col lg:flex  ">
        <span className='font-bold text-md text-black'>Esra Mülkpınar</span>
        <span className='text-sm text-gray-dar
        '>EsraMulkpinar</span>
      </div>
      <div className="hidden space-x-1 lg:flex ">
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
        <div className='w-1 h-1 bg-gray-900 rounded-full'/>
      </div>
    </div>
  )
}

export default UserBox
