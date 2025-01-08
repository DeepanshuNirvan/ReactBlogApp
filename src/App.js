import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Blogs from './components/views/Blogs';
import ContactForm from './components/forms/ContactForm';
import { LoginForm } from './components/forms/LoginForm';

function App() {
  const [isLogin, setLogin] = useState(false);
  return (
    <BrowserRouter>
      < Header isLogin={isLogin}/>
      <Routes>
        <Route path="/" element ={<Blogs category="all" />} />
        <Route path="/category/:category" element={<Blogs />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<LoginForm isLogin={isLogin} setLogin={setLogin} />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
