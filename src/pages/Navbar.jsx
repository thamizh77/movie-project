import { Link } from "react-router-dom";
import { WatchListContext } from '../context/WatchListContext';
import { useContext } from "react";
const Navbar = () => {

const {watchlist} = useContext(WatchListContext)

    return (
      <nav className="flex items-center justify-between bg-blue-600 px-3 py-2 text-white fixed top-0 w-full z-10">
        <Link
          to="/"
          className="md:text-2xl font-medium lg:text-2xl lg:font-medium cursor-pointer"
        >
          Movie App
        </Link>

        <Link
          to="/watchlist"
          className="md:text-2xl font-medium  lg:text-2xl lg:font-medium cursor-pointer"
        >
          WatchList({watchlist.length})
        </Link>
      </nav>
    );
}
 
export default Navbar;