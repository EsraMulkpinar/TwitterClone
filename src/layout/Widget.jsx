import React from 'react'
import { Timeline } from 'react-twitter-widgets'
import { ExploreIcon } from '../icons/icons'

const Widget = () => {
  return (
    <aside className="w-96 hidden lg:block ">
      <div className="flex items-center space-x-2 p-3 m-3 bg-gray-200 rounded-full text-gray-dark focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">
       <ExploreIcon/>
        <input
          className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm
        "
          type="text"
          name=""
          id=""
          placeholder="Search Twitter"
        />
      </div>
      <div className="mt-5 border-none! hidden lg:block">
        <Timeline  
        onLoad={""}
          dataSource={{
            sourceType: 'profile',
            screenName: 'reactjs',
          }}
          options={{
            height: '1000',
          }}
        />
      </div>
    </aside>
  )
}

export default Widget
