import React, { useContext } from 'react';
import FilterContext from '../../context/FilterContext';
import { SideNavS } from './style';

function SideNav() {
    const { setFilter } = useContext(FilterContext);
    const handleFilter = (e) => {
        setFilter(e.target.dataset.filter);
    }
    return (
        <SideNavS>
            <div>
                <img src="/assets/todo.svg" alt="logo" />
                <h1>Todo List</h1>
            </div>
            <div className='buttons-container'>
                <button data-filter="all" onClick={handleFilter}>All</button>
                <button data-filter="pending" onClick={handleFilter}>Pending</button>
                <button data-filter="completed" onClick={handleFilter}>Completed</button>
                <button data-filter="favorites" onClick={handleFilter}>Favorites</button>
            </div>
        </SideNavS>
    );
}

export default SideNav;