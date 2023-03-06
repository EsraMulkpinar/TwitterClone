import React from 'react'
import FeedItem from './FeedItem'

const FeedList = ({ tweets }) => {
  return (
    <div>
      {tweets.map((tweet,key) => (
       <FeedItem tweet={tweet} key={key}/>
      ))}
    </div>
  )
}

export default FeedList
