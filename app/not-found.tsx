import Link from 'next/link'
import React from 'react'

export default function notfound() {
  return (
    <div>
        <h1>Not Found</h1>
        <Link href='/'>go to home</Link>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta corporis vel unde tempore nesciunt voluptatem, commodi exercitationem earum eum numquam itaque placeat quisquam impedit, autem perferendis perspiciatis ad cupiditate error?</div>
    </div>
  )
}
