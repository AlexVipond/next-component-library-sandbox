import React, { useState } from 'react'
import Link from 'next/link'
// @ts-ignore
import routes from 'virtual-routes'

export default function Nav () {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav
        className={
          `flex flex-col h-screen fixed top-0 left-0 shadow-7 space-y-2 px-6 pt-10 text-5 transition duration-3 transform bg-blue-90 text-blue-10
          ${isOpen ? ' translate-x-0' : ' -translate-x-full'}`
        }
      >
        {routes.map(({ href, name }, index) => 
          <Link key={index} href={href}>
            <a className="hover:underline">{name}</a>
          </Link>
        )}
      </nav>
      <button 
        className={
          `fixed top-0 left-0 mt-4 ml-4 h-6 w-6 transition duration-3
          ${isOpen ? ' text-blue-10' : ' text-gray-90'}`
        }
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </button>
    </>
  )
}

function MenuIcon (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  )
}
