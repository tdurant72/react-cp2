import styled from 'styled-components';
import { themes } from './styles/ColorStyles';

const SecondaryButton = ({ label, secondary = true, size = "large", ...props }) => {
    return <StyledButton secondary={secondary} size={size}>{label}</StyledButton>
}
const StyledButton = styled.button`
    background-color:${props => props.secondary ? themes.secondary.main : 'white'};
    color:${props => props.secondary ? themes.secondary.lightText : themes.secondary.dark};
    font-size:${props => props.size === "large" ? "18px" : "14px"};
    padding:${props => props.size === "large" ? "0.7rem 1.5rem" : "0.5rem 1rem"} ;
    box-shadow: 0px 2px 2px 0px ${themes.secondary.dark};
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight:500;
    margin: 0 5px;
    border:${props => props.secondary ? 'none' : `2px solid ${themes.secondary.main}`};
    cursor:pointer;
    &:hover{
        background: ${props => props.secondary ? themes.secondary.dark : themes.secondary.secondaryWhite};
        transform: scale(1.05);
        box-shadow: 0px 4px 2px 0px ${themes.secondary.dark};
        /* transform: translateY(-5px); */
    }
`;
export default SecondaryButton;