import styled from 'styled-components';
import { Input } from 'antd';

export const UserInput = styled(Input)`
    margin-Bottom: .5rem;
    padding: .6rem 1rem;
    font-family: sans-serif;
    color: #7C7C7C;
    font-Size: medium;
    border-radius: .4rem;
`;

export const PasswordInput = styled(Input.Password)`
    margin-Bottom: .5rem;
    padding: .6rem 1rem;
    font-family: sans-serif;
    color: #7C7C7C;
    font-Size: medium;
    border-radius: .4rem;
`;

export const ButtonStyle = styled.button`
    color: ${({ color }) => color};
    font-family: sans-serif;
    font-size: Large;
    width: calc(50% - .5rem);
    padding: .5rem 0rem;
    cursor: pointer;
    background: ${({ back }) => back};
    border: solid 1px;
    border-color: ${({ color }) => color};
    border-radius: .4rem;
    text-align: center;
    margin-top: .5rem;
    &:hover {
        background: #f3f0f0;
    }
`;