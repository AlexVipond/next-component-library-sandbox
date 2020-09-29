import React from 'react'

export default function Page () {
  return (
    <main className="w-full min-h-screen bg-gray-10 flex">
      <section className="relative w-full flex items-center justify center">
        <div className="absolute top-1/3 left-1/5 rounded-4 bg-green-40"></div>
      </section>
      <section className="h-screen w-full max-w-4 pt-8 px-8 flex-shrink-0 bg-white shadow-7 overflow-y-scroll space-y-10">
        <details className="flex flex-col">
          <summary className="uppercase tracking-3 font-7 text-3 text-gray-90 cursor-pointer marker-none focus:outline-none focus:shadow-outline">
            <section className="flex items-center space-x-2">
              <Chevron className="h-3 w-3 transform open:rotate-90 transition duration-2" />
              <span className="open:text-green-50">Overview</span>
            </section>
            <div className="mt-3 w-8 h-px-1 rounded-full bg-gray-90" />
          </summary>
          <article className="mt-6">
            <h2 className="font-7 text-8">My Studio</h2>
            <p className="mt-3">I can write 560 characters (two tweets) describing why I created this studio and what we should use it for.</p>
          </article>
        </details>

        <details className="flex flex-col">
          <summary className="uppercase tracking-3 font-7 text-3 text-gray-90 cursor-pointer marker-none focus:outline-none focus:shadow-outline">
            <section className="flex items-center space-x-2">
              <Chevron className="h-3 w-3 transform open:rotate-90 transition duration-2" />
              <span className="open:text-green-50">Highlights</span>
            </section>
            <div className="mt-3 w-8 h-px-1 rounded-full bg-gray-90" />
          </summary>
          
        </details>

        <details className="flex flex-col">
          <summary className="uppercase tracking-3 font-7 text-3 text-gray-90 cursor-pointer marker-none focus:outline-none focus:shadow-outline">
            <section className="flex items-center space-x-2">
              <Chevron className="h-3 w-3 transform open:rotate-90 transition duration-2" />
              <span className="open:text-green-50">Activity</span>
            </section>
            <div className="mt-3 w-8 h-px-1 rounded-full bg-gray-90" />
          </summary>
          <ul className="mt-6 space-y-4 h-full">
            {
              (new Array(3)).fill().map((_, index) => 
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
        </details>
      </section>
    </main>
  )
}

function Chevron (props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
  )
}
