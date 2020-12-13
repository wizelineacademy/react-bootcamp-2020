import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './YouTube.styles.css'


function YouTube() {
  const [searchTerm, setSearchTerm] = useState('');
  const [miniCardData, setMiniCardData] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const YT_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchTerm}&type=video&key=AIzaSyDsECTCuUQSdjsST-hja25dLugnGsjKO3M`;

  const fetchData = () => {
    fetch(YT_API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMiniCardData(data.items);
      });
  };

  return (
    <div className="body">
      <div>
        <h2>YouTube API Test</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          className="SearchBar"
        />
        <button onClick={fetchData} className="searchButton">
          Go!
        </button>
      </div>

      <div className="cardDisplay">
        {miniCardData ? (
          miniCardData.map((item) => (
            <div key={item.id.videoId} className="videoCard">
              <img
                className="thumbnail"
                src={item.snippet.thumbnails.default.url}
                alt={item.snippet.title}
              />
              <div className="videoCardInfo">
                <p className="title">{item.snippet.title}</p>
                <p className="channelTitle">{item.snippet.channelTitle}</p>
                <Link to={`/video/${item.id.videoId}`}>VISIT</Link>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default YouTube;
