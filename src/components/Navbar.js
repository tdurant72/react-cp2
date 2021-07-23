import React from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { themes } from './styles/ColorStyles';
import { H2 } from './styles/Text.Styles';
import { Button } from './Button';

function Navbar({ title, logoSrc }) {
    return (
        <NavbarWrapper>

            <div className="navbar__left">
                {logoSrc && <NavbarLogo src={logoSrc} alt="logo" />}
            </div>
            {title && <Title>{title}</Title>}
            <NavbarButtons>
                <Button label="Login" />
                <Button type="primary-outline" primary={false} label="Register" />
                <Button type="secondary" label="Contact Us" />
            </NavbarButtons>
            <div className="navbar__right--mobile">
                <MenuIcon />
            </div>
        </NavbarWrapper>
    )
}
const NavbarWrapper = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
    padding-bottom:5px;
    border-bottom: 2px solid orange;
`;
const NavbarLogo = styled.img`
    object-fit: contain;
    height: 50px;
`;
const NavbarButtons = styled.div`
    display: flex; 
    align-items: center; 
    justify-content: space-between;
`;
const Title = styled(H2) `
    color:${themes.primary.darkText};
    margin:0;
    padding:0;
`;

export default Navbar
