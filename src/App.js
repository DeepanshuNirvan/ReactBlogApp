import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Blogs from './components/views/Blogs';
import ContactForm from './components/forms/ContactForm';

function App() {
  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path="/" element ={<Blogs category="all" />} />
        <Route path="/category/:category" element={<Blogs />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      < Footer />
    </BrowserRouter>
  );
}

export default App;
