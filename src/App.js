
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './Header/Header';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import About from './Pages/About';
import ServiceDetail from './Pages/ServiceDetail'
import Form from './Pages/Form';
import NoteState from './Context/Notestate'
function App() {
  return (
    <div className="App">
      <NoteState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="Services" element={<Services />} />
              <Route path="Blog" element={<Blog />} />
              <Route path="ServiceDetail" element={<ServiceDetail />} />
              <Route path="Form" element={<Form />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NoteState>
    </div>
  );
}

export default App;
