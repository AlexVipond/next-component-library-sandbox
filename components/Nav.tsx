import React from 'react'
import Link from 'next/link'

export default function Nav () {
  return (
    <nav className="space-x-4 flex items-center text-5">
      <Link href="/ant">
        <a className="text-blue-60 hover:underline">Ant</a>
      </Link>
      <Link href="/blueprint">
        <a className="text-blue-60 hover:underline">Blueprint</a>
      </Link>
      <Link href="/evergreen">
        <a className="text-blue-60 hover:underline">Evergreen</a>
      </Link>
      <Link href="/radix">
        <a className="text-blue-60 hover:underline">Radix</a>
      </Link>
    </nav>
  )
}
