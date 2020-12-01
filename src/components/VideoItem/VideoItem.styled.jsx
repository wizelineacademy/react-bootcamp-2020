import styled from 'styled-components';

export const CardVideo = styled.div`
    width: 20rem;
    height: 21rem;
    background: white;
    color: black;
    display: block;
    border-radius: .5rem;
    margin: .5rem;
    font-family: sans-serif;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),
    0px 1px 1px 0px rgba(0,0,0,0.14),
    0px 1px 3px 0px rgba(0,0,0,0.12);
`;

export const Img = styled.div`
    background-image: ${ ({ background }) => `url(${background})` };
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 40%;
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;
`;

export const InfoContainer = styled.div`
    padding: 1rem;
    height: 60%;
    overflow: hidden;
`;

export const Title = styled.div`
    font-size: 1.1rem;
    width: 100%;
    margin-bottom: .4rem;
`;

export const Description = styled.div`
    font-size: .95rem;
    word-break: break-all;
    width: 100%;
    color: grey;
`;