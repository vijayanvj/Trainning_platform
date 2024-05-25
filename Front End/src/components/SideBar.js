import React from 'react'
import { MdDashboardCustomize } from 'react-icons/md'
const SideBar = () => {

  
    return (
        <div>
            <div className="side-bar">
              
                    <div className='list-item'>
                        <div className="icon">
                            <MdDashboardCustomize />
                        </div>
                        <div className="text">
                            <p>Dashboard</p>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default SideBar