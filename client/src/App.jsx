import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Parsingform from './components/Parsingform'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Context } from './main.jsx';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
function App() {
  const { setuser, setisauthenticated, loading, setloading } = useContext(Context);
  useEffect(() => {
    setloading(true);
    const getdata = async () => {
      try {
        const data = await axios.get(`http://localhost:5000/api/auth/user`, {
          withCredentials: true,
        })
        setuser(data.data.user);
        setisauthenticated(true);
      } catch (error) {
        setisauthenticated(false);
        setuser({});
        console.log(error)
      }
    }
    getdata();
  }, [])
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}

export default App;