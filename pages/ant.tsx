import React from 'react'
import AntDefault from '../examples/ant-default'
import AntThemed from '../examples/ant-themed'


export default function Ant () {
  return (
    <main className="w-full min-h-screen p-12 space-y-12 bg-gray-20">
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Default</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          <AntDefault />
        </section>
      </section>
      <section className="mx-auto max-w-6">
        <h2 className="uppercase text-3 font-6 tracking-3 text-gray-60">Themed</h2>
        <section className="mt-2 rounded-4 shadow-5 p-6 bg-white">
          <AntThemed />
        </section>
      </section>
    </main>
  )
}
