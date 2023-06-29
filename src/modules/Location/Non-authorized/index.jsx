import React from 'react'
import TeamName from './TeamName/components/TeamName'
import Login from './Login/components/login'
import { useLocation } from 'react-router-dom'
import Register from './Register/components/Register'
import HeaderLayout from '../../Layout/Header'

const NonAuthorized = () => {
    const location = useLocation()
    const locationBasedComponent = {
        "/": <Register />,
        "/login": <Login />,
        "/register": <Register />,
        "/teamname": <TeamName />,
      }
  return (
    <>
    <div className='container'>
    <HeaderLayout />
    <div className='content-wrapper'>
        {locationBasedComponent[location.pathname]}
    </div>
    </div>
    </>
  )
}

export default NonAuthorized