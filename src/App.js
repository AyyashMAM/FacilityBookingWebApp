import logo from './logo.svg';
import './App.css';   
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'; 

function App() {
  return (
   <Router>
       <Navbar />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
            <Footer />
   </Router>
  );
}

export default App;
