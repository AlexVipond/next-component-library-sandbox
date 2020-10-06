import React, { useState } from 'react'

export default function Page () {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="w-full min-h-screen bg-gray-10 flex text-gray-90">
      <section className="relative w-full flex items-center justify center">
        <div className="absolute top-1/3 left-1/5 rounded-4 bg-green-40"></div>
      </section>
      <section className="h-screen w-full max-w-4 flex-shrink-0 bg-white shadow-7 flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} className="h-full flex-shrink-0 py-5 ml-4 mr-6 flex flex-col items-center space-y-4"/>
        {
          (activeTab ==='overview' && <Overview className="h-full w-full overflow-y-scroll scrolling-touch pt-5 pr-6"/>) ||
          (activeTab ==='activity' && <Activity className="h-full w-full overflow-y-scroll scrolling-touch pt-5 pr-6"/>) ||
          (activeTab ==='settings' && <Settings className="h-full w-full overflow-y-scroll scrolling-touch pt-5 pr-6"/>)
        }
      </section>      
    </main>
  )
}

function Sidebar ({ activeTab, setActiveTab, ...props }) {
  return (
    <section {...props}>
      <button>
        <IconInformationCircle 
          onClick={() => setActiveTab('overview')}
          className={`h-6 w-6 text-gray-50 hover:text-gray-90 transition duration-2 ${activeTab === 'overview' ? 'text-gray-90' : ''}`}
        />
      </button>
      <button>
        <IconRss 
          onClick={() => setActiveTab('activity')}
          className={`h-6 w-6 text-gray-50 hover:text-gray-90 transition duration-2 ${activeTab === 'activity' ? 'text-gray-90' : ''}`}
        />
      </button>
      <button>
        <IconCog 
          onClick={() => setActiveTab('settings')}
          className={`h-6 w-6 text-gray-50 hover:text-gray-90 transition duration-2 ${activeTab === 'settings' ? 'text-gray-90' : ''}`}
        />
      </button>
    </section>
  )
}

function Overview (props) {
  return (
    <section {...props}>
      <h2 className="uppercase text-gray-60 tracking-3 text-3 font-7">Overview</h2>
      <div className="mt-2 w-11 h-px-2 rounded-full bg-gray-20" />
      <article className="mt-6">
        <h2 className="font-7 text-8">My Studio</h2>
        <p className="mt-3 text-5">I can write two tweets worth of characters describing my studio and what its purpose is.</p>
      </article>
    </section>
  )
}

function Activity (props) {
  return (
    <section {...props}>
      <h2 className="uppercase text-gray-60 tracking-3 text-3 font-7">Activity</h2>
      <div className="mt-2 w-11 h-px-2 rounded-full bg-gray-20" />
      <section className="mt-4 flex items-center space-x-2">
        <button className=" flex items-center space-x-1 p-1 text-3 border-gray-20 hover:scale-110 transform transition duration-3">
          <IconChevron className="h-em-1 w-em-1" />
          <span>Filter by type</span>
        </button>
        <button className=" flex items-center space-x-1 p-1 text-3 border-gray-20 hover:scale-110 transform transition duration-3">
          <IconChevron className="h-em-1 w-em-1" />
          <span>Filter by person</span>
        </button>
      </section>
      <ul className="mt-6 space-y-4 h-full">
        {
          (new Array(3)).fill(null).map((_, index) => 
            <React.Fragment key={index}>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-blue-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Jeff</strong> and <strong>Ryan</strong> had a conversation about <a className="text-blue-60 hover:underline" href="#">a sticky</a>.
                  </p>
                  <p className="italic text-3 text-gray-60">5 minutes ago</p>
                </section>
              </li>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-blue-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Jeff</strong> left a comment on a sticky. <a className="text-blue-60 hover:underline" href="#">Join the conversation!</a>
                  </p>
                  <p className="italic text-3 text-gray-60">25 minutes ago</p>
                </section>
              </li>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-red-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Michelle</strong>, <strong>Alex</strong>, and <strong>Sam</strong> added new stickies.
                  </p>
                  <p className="italic text-3 text-gray-60">3 hours ago</p>
                </section>
              </li>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-green-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Sam</strong> came online.
                  </p>
                  <p className="italic text-3 text-gray-60">4 hours ago</p>
                </section>
              </li>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-green-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Noah</strong> joined the studio.
                  </p>
                  <p className="italic text-3 text-gray-60">1 day ago</p>
                </section>
              </li>
              <li className="flex items-start last:mb-8 space-x-2">
                <section className="relative w-6 text-4">
                  {/* empty space to enforce line height */}
                  <span>‏‏‎ ‎</span>
                  <div className="h-3 w-3 absolute top-1/2 transform -translate-y-1/2 rounded-4 bg-orange-40" />
                </section>
                <section className="space-y-1">
                  <p className="text-4">
                    <strong>Michelle</strong> worked on labels and background shapes.
                  </p>
                  <p className="italic text-3 text-gray-60">1 day ago</p>
                </section>
              </li>
            </React.Fragment>
          )
        }
      </ul>
    </section>
  )
}

function Settings (props) {
  return (
    <section {...props}>
      <h2 className="uppercase text-gray-60 tracking-3 text-3 font-7">Settings</h2>
      <div className="mt-2 w-11 h-px-2 rounded-full bg-gray-20" />
    </section>
  )
}

function IconInformationCircle (props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function IconRss (props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  )
}


function IconCog (props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function IconChevron (props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  )
}
