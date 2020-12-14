import React, { useContext , useEffect} from "react";
import VideoList from "../../components/VideoList/VideoList";
import PageContext from "../../providers/Context/PageContext";
import * as apiYoutube from "../../utils/apiYoutube";


const Home = () => {
  
  const { videoList , setVideoList } = useContext(PageContext);
  const { userLogged } = useContext(PageContext);

  const loadData = async () =>{
      if(videoList.length < 1){
        const varResponse = await apiYoutube.search();
        setVideoList(varResponse.data.items);
      }
  }
  useEffect(() => {
    loadData();
  });

  return (
    <>
      <h3>{userLogged.userStatus ? `Bienvenido ${userLogged.user}` : ""}</h3>
      <VideoList videos={videoList} spacing="-121" />
    </>
  );
};

export default Home;
