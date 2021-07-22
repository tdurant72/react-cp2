import styled from 'styled-components';
import { themes } from './styles/ColorStyles';

const SecondaryButton = ({ label, secondary, ...props }) => {
    return <StyledButton secondary={secondary}>{label}</StyledButton>
}
const StyledButton = styled.button`
    background-color:${props => props.secondary ? themes.secondary.main : 'white'};
    color:${props => props.secondary ? themes.secondary.darkText : themes.secondary.dark};
    font-size:1rem;
    padding: 0.7rem 1.5rem;
    box-shadow: 0px 2px 2px 0px ${themes.secondary.dark};
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight:500;
    margin: 0 5px;
    border:${props => props.secondary ? 'none' : `2px solid ${themes.secondary.main}`};
    cursor:pointer;
    &:hover{
        background: ${props => props.secondary ? themes.secondary.dark : 'white'};
        color: ${props => props.secondary ? themes.secondary.lightText : themes.secondary.darkText};
        transform: scale(1.05);
        box-shadow: 0px 4px 2px 0px ${themes.secondary.dark};
        /* transform: translateY(-5px); */
    }
`;
export default SecondaryButton;