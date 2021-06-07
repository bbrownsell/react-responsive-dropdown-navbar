import React, {useState} from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import { FaTimes, FaBars, FaCaretDown} from 'react-icons/fa';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    }

    return (
        <>
            <nav className="navbar">
                <Link to="/" className="navbar-logo">
                    EPIC
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className="fa-times"/> : <FaBars className="fa-bars"/>}
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services<FaCaretDown className="fa-caret-down"/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
                            Contact Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button/>
            </nav>
        </>
    )
}

export default Navbar;
