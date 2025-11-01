import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./pages/Watchlist";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { WatchListProvider } from "./context/WatchListContext";
import "./App.css";

function App() {
  return (
    <WatchListProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watchlist" element={<Watchlist />}></Route>
        </Routes>
      </Router>
    </WatchListProvider>
  );
}

export default App;
