import React from 'react'
import { SidebarMenuHeader } from './SidebarMenuHeader'
import { SidebarMenuContent } from './SidebarMenuContent'
import { SidebarMenuFooter } from './SidebarMenuFooter'
export const SidebarMenu = () => {
    return (

        
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">


                <SidebarMenuHeader />
                <SidebarMenuContent />
                <hr />
                <SidebarMenuFooter />

            </div>
        </div>
    )
}
