import React, {useState} from 'react'
import styled from 'styled-components'

const YouTubeStyled = styled.div`
padding: 120px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


.SearchBar{
    width: 100%;
}

.searchButton{
    width: 100%;
}

.cardDisplay{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.videoCard{
    background-color: pink;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
    height: 200px;
    border: 1px solid black;
    margin: 20px;
}
.title{
    font-size: 16px;
}

.channelTitle{
    font-size: 12px;
}
`

function Youtube() {
    const [searchTerm, setSearchTerm]  =  useState("")
    const [miniCardData,setMiniCardData] = useState([])

        const handleChange = event => {
            setSearchTerm(event.target.value);
          };

    const YT_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=AIzaSyDsECTCuUQSdjsST-hja25dLugnGsjKO3M`

    const fetchData = () => {
        fetch(YT_API)
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
                 <button 
                 onClick={()=>fetchData()}
                 className="searchButton"
                 >
                     Go!
                 </button>
            </div>

            <div className="cardDisplay">
                {miniCardData ? (miniCardData.map(item => (
                <div key={item.id.videoId} className="videoCard">
                    <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title}/>
                    <div className="videoCardInfo">
                        <p className="title">{item.snippet.title}</p>
                        <p className="channelTitle">{item.snippet.channelTitle}</p>
                    </div>
                </div>
            ))) 
            : 
            (<p>Loading...</p>)
            }
            </div>



        
        </YouTubeStyled>
    )
}

export default Youtube
