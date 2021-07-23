import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themes } from './styles/ColorStyles';

export const Button = ({ type, label, size, ...props }) => {
    return (
        <StyledButton type={type} size={size}>{label}</StyledButton>
    );
};

const StyledButton = styled.button`
        transition: all 0.2s ease-in;
        border-radius: 0.5rem;
        font-weight:500;
        cursor:pointer;
        margin: 0 5px;
        font-size:1rem;
        padding:0.5rem 1rem;

        font-size:${props => props.size === 'small' ? "0.875rem" : props.size === 'medium' ? "1rem" : "1.5rem"};
        
        background-color:${ props => props.type === 'primary' ? themes.primary.main : props.type === 'primary-outline' ? 'white' : props.type === 'secondary' ? themes.secondary.main : 'white'};

        color:${props => props.type === 'primary' ? themes.primary.lightText : props.type === 'primary-outline' ? themes.primary.dark : props.type === 'secondary' ? themes.secondary.lightText : themes.secondary.dark};

        border:${props => props.type === 'primary' ? `2px solid ${themes.primary.main}` : props => props.type === 'primary-outline' ? `2px solid ${themes.primary.main}` : props => props.type === 'secondary' ? `2px solid ${themes.secondary.main}` : `2px solid ${themes.secondary.main}`};

        box-shadow:0px 2px 2px 0px ${props => props.type === 'primary' || props.type === 'primary-outline' ? themes.primary.dark : themes.secondary.dark};
        
        &:hover{
            background-color:${props => props.type === 'primary' ? themes.primary.dark : props.type === 'primary-outline' ? 'white' : props.type === 'secondary' ? themes.secondary.dark : 'white'};
            box-shadow:0px 4px 2px 0px;
            transform: scale(1.05);
        }
`

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'primary-outline', 'secondary', 'secondary-outline']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'primary',
    size: 'medium',
    label: 'Button',
    onClick: undefined,
};
