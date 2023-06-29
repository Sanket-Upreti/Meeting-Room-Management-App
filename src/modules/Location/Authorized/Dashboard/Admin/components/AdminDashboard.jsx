import React from 'react'
import { useAuth } from '../../../../../../utils/auth'

const AdminDashboard = () => {
  const auth = useAuth()

  return (
    <div>Welcome {auth.user.username}</div>
  )
}

export default AdminDashboard