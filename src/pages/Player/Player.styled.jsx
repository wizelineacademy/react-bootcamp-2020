import styled from 'styled-components';

export const PlayerContainer = styled.div`
    padding: 1rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const PlayerVideoContainer = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const VideoTitle = styled.div`
    font-family: sans-serif;
    font-size: x-large;
    font-weight: bold;
    padding: .8rem 1.5rem;
    display: flex;
    justify-content: space-between;
`;

export const VideoDescription = styled.div`
    font-family: sans-serif;
    font-size: medium;
    padding: .3rem 1.5rem;
    color: grey;
`;

export const ListContainer = styled.div`
    width: 30%;
    height: 100%;
`;

export const ListItem = styled.div`
    width: 100%;
    height: 6rem;
    position: relative;
    color: black;
    background: white;
    overflow: hidden;
    display: flex;
    align-items: center;
    margin: 0rem .5rem .5rem .5rem;
    border: solid 1px grey;
    cursor: pointer;
`;

export const ListItemText = styled.div`
    height: 100%;
    padding: .5rem;
    font-family: sans-serif;
`;

