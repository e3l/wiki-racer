import React from 'react';
import {Link} from 'react-router-dom';


const NavBar = () => {
    return (
        <div>
            <span>hi</span>
            <Link to="/">home</Link>
            <Link to="/singleplayer">coggers</Link>
        </div>
    )
}

export default NavBar;