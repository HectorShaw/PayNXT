import React from 'react'
import { Appbar } from '../components/Appbar'
import { Balance } from '../components/Balance'
import { Users } from '../components/Users'

export const Dashboard = () => {
  return (
    <>
      <Appbar />
      <div className="m-8">
        <Balance value={(2000)} />
        <Users />
      </div>

    </>
  )
}
