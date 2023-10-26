'use client'
import Link from "next/link";
import styles from './navbar.module.css';
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const Navbar: React.FC <{ newUserName: string }> = ({ newUserName }) => {
    console.log("User Name (in Navbar):", newUserName);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => { 
        setAnchorEl(null);
    };

    return (<nav className={styles.navbar}>
        <ul className={styles.nav_ul}>
            <li><Link className={styles.nav_li} href="/">Home</Link></li>
            <li><Link className={styles.nav_li} href="/shop">Shop</Link></li>
            <li><Link className={styles.nav_li} href="/grocery">Grocery</Link></li>
            <li>
                <a className={styles.nav_li} href="#" onClick={handleClick}>Electronics</a>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}    
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link className={styles.nav_li} href="/electronics/mobiles">Mobiles</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className={styles.nav_li} href="/electronics/laptops">Laptops</Link>
                    </MenuItem>
                </Menu>
            </li>

            <li >
            {newUserName ? (
            <span>Hello, {newUserName}</span>
        ) :(<Link className={styles.nav_li} href="/login">LogIn</Link>)}</li>
            <li ><Link className={styles.nav_li} href="/signup">SignUp</Link></li>
        </ul>
    </nav>);
}

export default Navbar;

