import React from 'react'
import RadixDefault from '../examples/radix-default'
import AntDefault from '../examples/ant-default'
import EvergreenDefault from '../examples/evergreen-default'
import EvergreenThemed from '../examples/evergreen-themed'


function App () {
  return (
    <main className="w-full min-h-screen p-12 space-y-12 bg-gray-20">
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Radix (default styles)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          {/* <RadixDefault /> */}
        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Ant (default styles)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          <AntDefault />
        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Evergreen (default styles)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          <EvergreenDefault />
        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Radix (themed)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">

        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Ant (themed)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">

        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Evergreen (themed)</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          <EvergreenThemed />
        </section>
      </section>
    </main>
  )
}

export default App
