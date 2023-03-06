import React, { useState } from 'react'
import SideLink from '../components/SideLink'
import UserBox from '../components/UserBox'
import {
  BookmarkIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessageIcon,
  MoreIcon,
  NotificationIcon,
  ProfileIcon,
  TwitterIcon,
} from '../icons/icons'

const sideLinks = [
  {
    name: 'Home',
    icon: HomeIcon,
  },
  {
    name: 'Explore',
    icon: ExploreIcon,
  },
  {
    name: 'Notification',
    icon: NotificationIcon,
  },
  {
    name: 'Messages',
    icon: MessageIcon,
  },
  {
    name: 'Bookmark',
    icon: BookmarkIcon,
  },
  {
    name: 'Lists',
    icon: ListsIcon,
  },
  {
    name: 'Profile',
    icon: ProfileIcon,
  },
  {
    name: 'More',
    icon: MoreIcon,
  },
]
const SideBar = () => {
  const [active, setactive] = useState('Home')
  const handleMenuItemClick = (name) => {
    setactive(name);
  }
  return (
    <div className="h-screen sticky top-0 z-10 w-20 md:w-72 flex flex-col justify-between px-2 ">
      <div className="">
        <div className="my-4 mx-1 hover:bg-gray-lightest flex items-center justify-center w-12 h-12 rounded-full transform transition-colors duration-200">
          <TwitterIcon />
        </div>
        <nav className="mb-4">
          <ul className=''>
            {sideLinks.map(({ name, icon }) => {
              return (
                <SideLink
                  key={name}
                  name={name}
                  Icon={icon}
                  active={active}
                  onMenuItemClick={handleMenuItemClick}
                />
              )
            })}
          </ul>
        </nav>
        <button
          className="bg-primary-base text-white hidden md:block
         rounded-full py-3 px-8 w-11/12 shadow-lg hover:bg-primary-dark transform transition-colors duration-200"
        >
          Tweet
        </button>
      </div>
      <div className=""><UserBox/></div>
    </div>
  )
}

export default SideBar
