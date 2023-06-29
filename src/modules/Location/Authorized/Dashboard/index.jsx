import React from 'react'
import { useGetUsersQuery } from '../../../../store/services/roomManagementService'
import SpinnerAnimation from '../../../../helpers/Spinner'
import AdminDashboard from './Admin/components/AdminDashboard'
import AttendeeDashboard from './Attendee/components/AttendeeDashboard'
import HostDashboard from './Host/components/HostDashboard'

const Authorized = () => {
  const {data: response, isLoading} = useGetUsersQuery()

  if(isLoading){
    return <SpinnerAnimation />
  }

  // if(response?.users?.role === "admin"){
    return <AdminDashboard />
  // }

  if(response?.users?.role === "attendee"){
    return <AttendeeDashboard />
  }

  if(response?.users?.role === "host"){
    return <HostDashboard />
  }

}

export default Authorized;