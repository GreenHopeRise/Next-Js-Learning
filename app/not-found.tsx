import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div>
        <h1>Not Found</h1>
        <Link href='/'>go to home</Link>
    </div>
  )
}
