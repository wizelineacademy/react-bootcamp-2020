import React, { useContext } from "react";
import VideoList from "../../components/VideoList/VideoList";
import PageContext from "../../providers/Context/PageContext";
import apiYoutube from "../../utils/apiYoutube";


const Home = () => {
  
  const { videoList , setVideoList } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);
  //IFEE function;
  (() => {
    if(videoList.length < 1){
      apiYoutube
      .get("/search")
      .then((response) => {
        setVideoList(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
    };
  })()
  return (
    <>
      <h3>{userLogged.userStatus ? `Bienvenido ${userLogged.user}` : ""}</h3>
      <VideoList videos={videoList} spacing="-121" />
    </>
  );
};

export default Home;
