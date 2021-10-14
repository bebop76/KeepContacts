import React, {useState} from "react";
import {Link} from 'react-router-dom';

const Header = () =>{
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpen = () => {
      setOpenMenu(prev => !prev)
    }
    return(
        <header className="header clearfix" >
            <span>KeepContacts</span>
            <span className="icon-bar" onClick={handleOpen}><span></span><span></span><span></span></span>
            <ul className={`menu ${openMenu ? "show-menu" : ""}`} >
              <li className="menu-item"><Link to="/">Home</Link></li>
              <li className="menu-item"><Link to="/addcontact">Add Contact</Link></li>
              <li className="menu-item"><Link to="/savelist">Import/Export List</Link></li>
              <li className="menu-item"><Link to="/search">Search</Link></li>
              <li className="menu-item"><Link to="/credits">Credits</Link></li>
              <li className="menu-item"><Link to="/options">Options</Link></li>
            </ul>

        </header>
    );
}

export default Header