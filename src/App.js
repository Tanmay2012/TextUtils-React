// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert= (message,type)=>{
       setAlert({
         msg: message,
         type : type
       })
       setTimeout(() => {
         setAlert(null)
       }, 1500);
  }
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#171717';
      showAlert("Dark mode has been enabled",'success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled",'success');
    }
  }
  return (
    <>
   <BrowserRouter>
   <Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>
   </Routes>
   </div>
   </BrowserRouter>
   </>
  );
}

export default App;
