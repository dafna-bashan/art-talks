import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export function Home() {

  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('loggedinUser')) navigate('/painting')
  }, [])

  function handleChange(ev) {
    const { name, value } = ev.target
    setUsername(value)
  }

  function onSubmit(ev) {
    ev.preventDefault()
    sessionStorage.setItem('loggedinUser', username)
    navigate('/painting')
  }

  return (
    <div className="home flex column align-center justify-center">
      <h1>Welcome to Art Talks</h1>
      <form onSubmit={onSubmit} className="flex column align-center">
        <input required type="text" name="username" value={username} onChange={handleChange} placeholder="Type your username" />
        <button>Start here</button>
      </form>
      {/* <Link to='/painting'>
        Start here
      </Link> */}
    </div>
  )
}
