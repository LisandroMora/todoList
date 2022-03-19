import React from 'react';
import { SideNavS } from './style';

function SideNav() {
    return (
        <SideNavS>
            <div>
                <img src="/assets/todo.svg" alt="logo" />
                <h1>Todo List</h1>
            </div>
            <div className='buttons-container'>
                <button>All</button>
                <button>Pending</button>
                <button>Completed</button>
                <button>Favorites</button>
            </div>
        </SideNavS>
    );
}

export default SideNav;