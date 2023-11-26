//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import React from "react";
// now we stop routing and remove about pages
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes,
//   Link
// } from "react-router-dom";
// let nam="harry";
function App() {
  const [mode, setmode] =useState('light')  //weather dark mode is is enable or not
  const [alert, setalert ]=useState(null)
  const showAlert=(message, type)=>{
    setalert ({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  const togglemode=()=>{
    if(mode ==='light'){
      setmode('dark')
      document.body.style.backgroundColor ='#042743'
      showAlert( "Dark mode has been enabled","success")
    }else{
      setmode('light')
      document.body.style.backgroundColor ='white'
      showAlert("light mode has been enabled","success" )


    }
  }
  return (
   <>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} togglemode={togglemode}/>
<Alert alert={alert}></Alert>
<div className="container">
        {/* <Routes> */}
          {/* <Route path="/about">
            <About />
          </Route> */}
          {/* Always use exact before the path because react always use partial routing which means if one path is /user which render component 1 and path /user/home which render component 2 and if we not use exact then it we try to follow path /user/home then also /user component 1 is render because react always use partial routing  */}
          {/* <Route exact path="/about" element={<About />} />    */}
          {/* <Route  path="/"> */}
          <TextForm heading="Enter the text below to analyze" showAlert={showAlert} mode={mode}/>
            {/* <Home /> */}
          {/* </Route> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text below to analyze" showAlert={showAlert} mode={mode}/>} /> */}
        {/* </Routes> */}
</div>
{/* </Router> */}
   </>
);
}

export default App;
