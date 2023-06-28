import React from 'react'
import { useGetUsersQuery } from '../../../../store/services/roomManagementService'
import SpinnerAnimation from '../../../../helpers/Spinner'

const Authorized = () => {
  const location = useLocation()
  const locationBasedComponent = {
      "/login": <Login />,
      "/register": <Register />,
      "/teamname": <TeamName />,
    }

  return (
    <>
        {response?.map((users)=>{
            return <div key={users.id}>{users.role}</div>
        })}
        </>
  )
}

export default Authorized;