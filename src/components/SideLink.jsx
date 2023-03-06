import React from 'react'

const SideLink = ({ name, Icon, active, onMenuItemClick }) => {
  const isactive = active === name
  return (
    <li
      className="group"
      onClick={() => {
        onMenuItemClick(name)
      }}
    >
      <a
        href={name.toLowerCase()}
        className="cursor-pointer block text-xl m-2 pointer-events-none"
      >
        <div className="inline-block">
          <div
            className={`
flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3
      ${isactive ? 'text-primary-base' : ''}
`}
          >
            <span>
              <Icon />
            </span>
            <span className="ml-4 font-bold hidden md:block">{name}</span>
          </div>
        </div>
      </a>
    </li>
  )
}

export default SideLink
