import React from 'react'

export const SidebarMenuFooter = () => {
    return (
        <div class="dropdown pb-4">
            <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle" />
                <span class="d-none d-sm-inline mx-1">Name User</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">

                <li><a class="dropdown-item" href="#">Settings</a></li>

                <li><hr /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
        </div>

    )
}
