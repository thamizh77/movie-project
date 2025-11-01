import { createContext, useState , useEffect} from "react";

 export const WatchListContext = createContext();



export const WatchListProvider = ({children}) => {
    const [watchlist, setwatchlist] = useState([]);
    const [genrelist, setgenrelist] = useState([]);



    useEffect(() => {
        
    let url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/genre/movie/list?api_key=4b38b713d682630cd122b7bfdc29be9f`;
    
      
        fetch(url)
          .then((response) => response.json())
          .then((data) => setgenrelist(data.genres) || []);
    
      },[])
    


    const toggleWatchList = (movie) => {
      const index = watchlist.findIndex((m) => m.id === movie.id);

      if (index === -1) {
        setwatchlist([...watchlist, movie]);
      } else {
        setwatchlist([
          ...watchlist.slice(0, index),
          ...watchlist.slice(index + 1),
        ]);
      }
    };

    return (
        <WatchListContext.Provider value={{watchlist,toggleWatchList, genrelist}}>
{children}
        </WatchListContext.Provider>
    )
}