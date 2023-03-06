import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import Divider from '../components/Divider'
import FeedList from '../components/FeedList'
import TweetBox from '../components/TweetBox'
import db from '../firebase'
import { TwitterIcon } from '../icons/icons'

const Content = () => {
  const [tweets, setTweets] = useState([])
  useEffect(() => {
     getDocs(collection(db, 'feed')).then((querySnapshot) => {
     setTweets(querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })))
    })
  
  }, [])
  
  return (
    <main className="flex-1 border">
      <div className="sticky top-0 z-10 bg-white flex items-center justify-between  p-5 font-bold border  rounded-lg">
        <span> Home</span>
        <TwitterIcon />
      </div>
      <div className="flex items-center px-4 py-3 space-x-4">
        <img
          className="w-11 h-11 rounded-full"
          src="https://pbs.twimg.com/profile_images/1534548309901205504/9SBUTuHZ_400x400.jpg"
          alt="#"
        />

        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  )
}

export default Content
