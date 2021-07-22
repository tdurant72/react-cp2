import styled from 'styled-components';
import { themes } from './styles/ColorStyles';

const PrimaryButton = ({ label, primary, ...props }) => {
    return <StyledButton primary={primary}>{label}</StyledButton>
}
const StyledButton = styled.button`
    background-color:${props => props.primary ? themes.primary.main : 'white'};
    color:${props => props.primary ? themes.primary.darkText : themes.primary.dark};
    font-size:1rem;
    padding: 0.7rem 1.5rem;
    box-shadow: 0px 2px 2px 0px ${themes.primary.dark};
    transition: all 0.2s ease-in;
    border-radius: 0.5rem;
    font-weight:500;
    margin: 0 5px;
    border:${props => props.primary ? 'none' : `2px solid ${themes.primary.main}`};
    cursor:pointer;
    &:hover{
        background: ${props => props.primary ? themes.primary.dark : 'white'};
        color: ${props => props.primary ? themes.primary.lightText : themes.primary.darkText};
        transform: scale(1.05);
        box-shadow: 0px 4px 2px 0px ${themes.primary.dark};
        /* transform: translateY(-5px); */
    }
`;
export default PrimaryButton;