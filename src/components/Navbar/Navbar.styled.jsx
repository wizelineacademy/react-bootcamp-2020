import { Input, Switch } from 'antd';
import styled from 'styled-components';

export const NavBar = styled.header`
    width: 100%;
    height: 4rem;
    background: ${({ color }) => color};
    display: flex;
    padding: .8rem 1.5rem;
`; 

export const InputContainer = styled.div`
    width: 50%;
`;

export const LoginContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

export const InputStyled = styled(Input)`
    width: 15rem;
    border-radius: .2rem; 
    padding: .3rem .5rem;
    font-family: sans-serif;
    font-size: large;
`;

export const SwitchStyled = styled(Switch)`
    width: 3rem;
    margin-right: .5rem;
`;

export const DarkModeStyled = styled.div`
    font-family: sans-serif;
    font-size: large;
    color: ${({ color }) => color};
`;

export const LoginButton = styled.div`
    width: 2.5rem;
    text-align: center;
    display: flex;
    justify-content: center;
    padding: 5px;
    border-radius: 100%;
    background: grey;
    cursor: pointer;
    margin-left: 2rem;
`;

export const BaseButton = styled.button`
    padding: .2rem .5rem;
    border: solid 2px;
    border-color: ${({ color }) => color};
    cursor: pointer;
    color: ${({ color }) => color};
    margin-right: 1rem;
    border-radius: .5rem;
    font-family: sans-serif;
    font-size: large;
    background: ${({ back }) => back};
    &:hover {
        background: #dddddd;
    }
`;