import React from 'react'
import { useGetUsersQuery } from '../../../store/services/roomManagementService'

const Dashboard = () => {
    const {data:response, isLoading, isSuccess, refetch } = useGetUsersQuery()

    if(isLoading){
        return <div>loading...............</div>
    }


  return (
    <>
        {response?.map((users)=>{
            return <div key={users.id}>{users.role}</div>
        })}
        </>
  )
}

export default Dashboard;