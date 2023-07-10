import React from 'react'
import { Link } from 'react-router-dom'


export function Home() {
  return (
    <div className="home flex column align-center justify-center">
      <h1>Welcome</h1>
      <Link to='/main'>
        Start here
      </Link>
    </div>
  )
}
