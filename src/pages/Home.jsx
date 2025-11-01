import { useEffect, useState } from "react";
import Moviecard from "../components/Moviecard";






const Home = () => {


  const [movies, setmovies] = useState([]);
  const [page, setpage] = useState(1);
const [search, setsearch] = useState("")
  useEffect(() => {
    
let url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=4b38b713d682630cd122b7bfdc29be9f`;

    
    if (search) {
      url = `https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?query=${search}&api_key=4b38b713d682630cd122b7bfdc29be9f`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => setmovies(data.results));

  },[page,search])



    return (
      <div className="p-4 mt-12 md:mt-14">
        <input
          type="text"
          placeholder="Search Your Movies"
          className="p-4 w-3/4 md:w-1/2 border rounded-md border-blue-500 focus:outline-none bg-blue-100 opacity-60 fixed top-12 md:top-14 left-1/2 transform -translate-x-1/2 z-10"
          onChange={(e) => setsearch(e.target.value)}
        />

        <div className="moviecontainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 justify-center items-center w-fit mx-auto">
          {movies.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>

        <div className="paginationcontainer flex justify-between items-center mt-6 ">
          <button
            disabled={page == 1}
            className="bg-blue-600 p-3 text-white text-xl rounded-md cursor-pointer"
            onClick={() => setpage((prev) => prev - 1)}
          >
            PREV
          </button>
          <button
            className="bg-blue-600 p-3 text-white text-xl rounded-md cursor-pointer"
            onClick={() => setpage((prev) => prev + 1)}
          >
            NEXT
          </button>
        </div>
      </div>
    );
}
 
export default Home;