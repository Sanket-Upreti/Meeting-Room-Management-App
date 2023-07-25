import React from 'react'
import { useGetUsersQuery } from '../../../../store/services/roomManagementService'
import SpinnerAnimation from '../../../../helpers/Spinner'
import AdminDashboard from './Admin/components/AdminDashboard'
import AttendeeDashboard from './Attendee/components/AttendeeDashboard'
import HostDashboard from './Host/components/HostDashboard'
import HeaderDashboard from '../../../Layout/HeaderDashboard'
import SidebarLayout from '../../../Layout/sidebar'
import Manage from './Manage/components/Manage'
import { Navigate, useLocation } from 'react-router-dom'
import WrongRoute from '../../NotFound/WrongRoute'

const Authorized = () => {
  const {data: response, isLoading} = useGetUsersQuery();
  const location = useLocation()
  const locationBasedComponent = {
      "/": <AdminDashboard />,
      "/Dashboard": <AdminDashboard />,
      "/dashboard": <AdminDashboard />,
      "/Manage": <Manage />,
      "/manage": <Manage />,
    }

  const data = {
    firstname: "Sanket",
    lastname: "Upreti",
    username: "Sanket Upreti",
    role: "host",
    token: Math.floor(Math.random() * 7) 
  }

  if(isLoading){
    return <SpinnerAnimation />
  }

  const token = localStorage.getItem('token');

  if(!token){
    return <Navigate to="/" />
  }

  if(data?.role !== "admin" && location.pathname.toLowerCase() === "/manage"){
    return <WrongRoute />
  }

  if(data?.role === "admin"){
    return (<>
    <div style={{"display": "flex"}}>
      <SidebarLayout sidebarPages={["Dashboard", "Manage"]}/>
      <div style={{"display": "block", "width": "100vw", "padding":"16px"}}>
      <HeaderDashboard data={data} isLoading={isLoading}/>
      {locationBasedComponent[location.pathname]}
      </div>
      </div>
    </>)
  }

  if(data?.role === "attendee" && location.pathname.toLowerCase() !== "/manage"){
    return (<><div style={{"display": "flex"}}>
      <SidebarLayout sidebarPages={["Dashboard"]}/>
      <div style={{"display": "block", "width": "100vw", "padding":"16px"}}>
      <HeaderDashboard data={data} isLoading={isLoading}/>
      <AttendeeDashboard />
      </div>
      </div>
    </>)
  }

  if(data?.role === "host" && location.pathname.toLowerCase() !== "/manage"){
    return (<><div style={{"display": "flex"}}>
      <SidebarLayout sidebarPages={["Dashboard"]}/>
      <div style={{"display": "block", "width": "100vw", "padding":"16px"}}>
      <HeaderDashboard data={data} isLoading={isLoading}/>
      <HostDashboard />
      </div>
      </div>
    </>)
  }

}

export default Authorized;