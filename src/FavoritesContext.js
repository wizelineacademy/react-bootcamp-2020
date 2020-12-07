import React, { useState, useContext, useEffect} from 'react'


const FavoritesContext = React.createContext(null)

function useFavorites() {
    const context = useContext(FavoritesContext);
    if (!context) {
      throw new Error(`Can't use "useSearch" without an Favorites!`);
    }
    return context;
  }

  function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    function getFavorites() {
        let favorites=JSON.parse(sessionStorage.getItem('favorites'))

        if (!favorites) {
            favorites = []
        } 
        setFavorites(favorites)
    }

    function removeFavorite(video) {

        const fav = favorites.filter((e)=>{
            return e.id.videoId !== video.id.videoId
        })
        saveFavorites(fav)
      

    }

    function addFavorite(video) {

        let idx = favorites.findIndex(x => x.id.videoId ===video.id.videoId)
        console.log(idx)

        if (idx===-1)
        {
            const fav = [...favorites, video]
            saveFavorites(fav)
        }
    }

    function saveFavorites(favorites) {

        sessionStorage.setItem('favorites', JSON.stringify(favorites));
        setFavorites(favorites)

    }

    useEffect(() => {
        getFavorites()
      }, [])

    return (
      <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite}}>
        {children}
      </FavoritesContext.Provider>
    );
  }


export { useFavorites};
export default FavoritesProvider;