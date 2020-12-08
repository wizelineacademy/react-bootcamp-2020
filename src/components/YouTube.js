import React, {useState} from 'react'
import styled from 'styled-components'

const YouTubeStyled = styled.div`
padding: 200px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


.SearchBar{
    width: 100%;
}

.videoCard{
    background-color: red;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 400px;
    height: 200px;
    border: 1px solid black;
}
`

function Youtube() {
    const [searchTerm, setSearchTerm]  =  useState("")
    const [miniCardData,setMiniCardData] = useState([])

        const handleChange = event => {
            setSearchTerm(event.target.value);
          };

    const fetchData = () => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=AIzaSyDsECTCuUQSdjsST-hja25dLugnGsjKO3M`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setMiniCardData(data.items)
        })
    }

    return (
        <YouTubeStyled>
            <div >
                <h1>YouTube API Test</h1>
                <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
                className="SearchBar"
                />
                 <button onClick={()=>fetchData()}>Go!</button>
            </div>

        {miniCardData ? (miniCardData.map(item => (
            <div key={item.id.videoId} className="videoCard">
                <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}/>
                <div className="videoCardInfo">
                    <p>{item.snippet.title}</p>
                    <p>{item.snippet.channelTitle}</p>
                </div>
            </div>
        ))) 
        : 
        (<p>Loading...</p>)
        }

        
        </YouTubeStyled>
    )
}

export default Youtube
