import styled from 'styled-components';

const YouTubeStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: black;
  }

  .SearchBar {
    width: 100%;
  }

  .searchButton {
    width: 100%;
  }

  .thumbnail {
    width: 100%;
  }

  .cardDisplay {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 75%;
  }

  .videoCard {
    background-color: #ffffff;
    border: 1px solid blue;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 180px;
    height: 280px;
    border: 1px solid black;
    margin: 20px;
  }

  .videoCard a {
    color: black;
  }

  .title {
    font-size: 10px;
    text-align: left;
    text-transform: uppercase;
  }

  .channelTitle {
    font-size: 8px;
    text-align: left;
    color: plum;
  }
`;

export default YouTubeStyled;
