
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode ]=useState('light');
  const toggleMode= ()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light');
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="AboutUs" mode={mode} toggleMode={toggleMode} />
        <div className='container my-3'>
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/*<About/>*/}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
