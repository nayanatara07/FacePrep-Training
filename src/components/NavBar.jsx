import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const days = ["day_0", "day_1", "day_2", "day_3", "day_4"];

    return (
        <nav>
            <a href="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" target='_blank'>
                {/* <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="my logo" /> */}
            </a>
            <div className="day flex space-around" onClick={toggleDropdown}>
                Day
                {isDropdownOpen && (
                    <div className="days">
                        {days.map((day, index) => (
                            <NavLink key={index} to={day.toLocaleLowerCase()}>{day}</NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
