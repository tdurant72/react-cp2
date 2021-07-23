import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themes } from './styles/ColorStyles';
import TextField from '@material-ui/core/TextField';
function Input({ size = 'medium', variant, label, ...props }) {
    return (
        <StyledInput variant={variant} label={label} size={size} />
    )
}
const StyledInput = styled(TextField) `
.MuiInputBase-input{
    font-size:${props => props.size === 'small' ? "0.875rem" : props.size === 'large' ? "1.5rem" : "1rem"}; 
    color:${themes.primary.main};
    border-bottom: 1px solid ${themes.primary.main};
}
`

Input.propTypes = {
    variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Input.defaultProps = {
    variant: 'standard',
    size: 'medium',
    label: 'Input',
    onClick: undefined,
};
export default Input
