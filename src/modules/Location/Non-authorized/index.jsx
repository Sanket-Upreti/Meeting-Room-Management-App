import React from 'react'
import Header from '../../Layout/header'
import Dashboard from '../Authorized/Dashboard'
import TeamName from './TeamName/components/TeamName'
import Login from './Login/components/login'
import { useLocation } from 'react-router-dom'
import Register from './Register/components/Register'

const NonAuthorized = () => {
    const location = useLocation()
    const locationBasedComponent = {
        "/login": <Login />,
        "/register": <Register />,
        "/teamname": <TeamName />,
      }
  return (
    <>
    <Header />
    <div className='content-wrapper'>
        {locationBasedComponent[location.pathname]}
    </div>
    </>
  )
}

export default NonAuthorized