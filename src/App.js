import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import UpdateMovie from "./pages/UpdateMovie";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TvShows />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} /> 
        <Route path="/update/:id" element={<UpdateMovie />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
