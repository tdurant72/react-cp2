import React from 'react'
import "./Navbar.css"
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { themes } from './styles/ColorStyles';
import { H2 } from './styles/Text.Styles';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function Navbar({ title, logoSrc }) {
    return (
        <NavbarWrapper>

            <div className="navbar__left">
                {logoSrc && <NavbarLogo src={logoSrc} alt="logo" />}
            </div>
            {title && <Title>{title}</Title>}
            <NavbarButtons>
                <PrimaryButton primary={true} label="Login" />
                <PrimaryButton label="Register" />
                <SecondaryButton secondary={true} label="Contact Us" />
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
`;

export default Navbar
