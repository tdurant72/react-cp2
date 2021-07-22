import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
export default function Header({ title }) {
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://www.filepicker.io/api/file/q8yh1SmySmy5BNapeDem" alt="logo" />
            </div>
            {title && <h2 className="header__title">{title}</h2>}
            <div className="header__right">
                <Button>Login</Button>
                <Button>Register</Button>
            </div>
            <div className="header__right--mobile">
                <MenuIcon />
            </div>
        </div>
    )
}
