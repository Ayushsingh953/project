import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Booking from './pages/Booking';
import SignUp from './pages/SignUp';
import BlogStory from './pages/BlogStory';
import LandingPage from './components/LandingPage';
import Tracker from './pages/tracker/Tracker';
import TopNavbar from './components/Navbar/TopNavbar';


function App() {
  return (
    <>
    <BrowserRouter>
    <TopNavbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/SignUp' element={<SignUp/>} />
          <Route path='/Tracker' element={<Tracker/>} />
          <Route path='/Booking' element={<Booking/>} />
          <Route path='/BlogStory' element={<BlogStory/>} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;