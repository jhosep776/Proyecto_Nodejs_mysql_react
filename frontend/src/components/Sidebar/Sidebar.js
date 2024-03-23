import React from 'react'
import { SidebarMenu } from './SidebarMenu'

export const Sidebar = ({ content }) => {
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <SidebarMenu />
                <div class="col py-3">
                    {content}
                </div>
            </div>
        </div>
    )
}
