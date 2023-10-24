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
            <li className={styles.nav_li}><Link href="/">Home</Link></li>
            <li className={styles.nav_li}><Link href="/shop">Shop</Link></li>
            <li className={styles.nav_li}><Link href="/grocery">Grocery</Link></li>
            <li className={styles.nav_li}>
                <a href="#" onClick={handleClick}>Electronics</a>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>
                        <Link href="/electronics/mobiles">Mobiles</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link href="/electronics/laptops">Laptops</Link>
                    </MenuItem>
                </Menu>
            </li>

            <li className={styles.nav_li}>
            {newUserName ? (<div>
            <span>Hello, {newUserName}</span></div>
        ) :(<Link href="/login">LogIn</Link>)}</li>
            <li className={styles.nav_li}><Link href="/signup">SignUp</Link></li>
        </ul>
    </nav>);
}

export default Navbar;