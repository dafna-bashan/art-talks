import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

export function Header() {

    const [open, setOpen] = useState(false)

    const onOpenNavbar = () => {
        console.log('open');
        setOpen(true)
    }

    return (
        <header className="app-header">
            <div className={open ? 'main-screen open' : 'main-screen'} onClick={() => setOpen(false)}></div>
            <nav className="main-nav flex space-between">
                <NavLink to="/"><span>Home</span></NavLink>
                <nav className={open ? 'links open flex' : 'links flex'}>
                    <NavLink to="/main">App</NavLink>
                </nav>
                <MenuIcon className="hamburger" onClick={onOpenNavbar}></MenuIcon>
            </nav>
        </header>
    )
}
