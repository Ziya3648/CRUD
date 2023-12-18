import React from 'react'
import Sidebar from '../pages/Admin/components/Sidebar/Sidebar'
import '../pages/Admin/admin.css'

const AdminLayout = (props) => {
  return (
    <div className='admin-layout'>
      <Sidebar />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default AdminLayout