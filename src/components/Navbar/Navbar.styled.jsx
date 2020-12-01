import { Input, Switch } from 'antd';
import styled from 'styled-components';

export const NavBar = styled.header`
    width: 100%;
    height: 4rem;
    background: blue;
    display: flex;
    padding: 1rem 1.5rem;
`; 

export const InputStyled = styled(Input)`
    width: 60%;
`;

export const SwitchStyled = styled(Switch)`
    width: 10%;
`;

export const LoginButton = styled.div`
    width: 20%;
    cursor: pointer;
`;