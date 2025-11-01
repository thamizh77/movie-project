import { useContext } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WatchListContext } from '../context/WatchListContext';



const Moviecard = ({ movie }) => {
  const { toggleWatchList,watchlist } = useContext(WatchListContext);
  
  const inwatchlist = watchlist.some((m) => m.id == movie.id);


    return (
      <div className="bg-blue-800 p-8 rounded-lg shadow-lg text-white w-fit relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt=""
          className="rounded-lg w-full h-80 object-contain"
        />
        <h1 className="text-xl font-bold mt-2">{movie.title}</h1>
        <p className="text-xs font-light mt-1">{movie.release_date}</p>
        <button
          className="absolute top-3 right-3 text-xl text-red-500"
          onClick={() => toggleWatchList(movie)}
        >
          {inwatchlist ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    );
}
 
export default Moviecard;