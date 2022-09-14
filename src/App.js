// import Navbar from './Components/Navbar';
import './App.css';
import React from 'react'
import { useState } from 'react';
// import Bodycss from './Components/Bodycss';
// import Divider from 'react-native-divider';

//import Divider from 'react-native-divider';
import Update from './Components/Update';
// import Topdiv from './Components/Topdiv';
import Navbar1 from './Components/Navbar1';
import Accordian from './Components/Accordian';
import Carousel from './Components/Carousel';
// import { mode } from 'mathjs';

// import { Router } from 'react-router-dom';
// import Alert from './Components/Alert'


export default function App() {
  const[mode,setmode]=useState('light')
  const togglemode=()=>{
    if(mode==='light')
    {
      setmode('dark')
      console.log(mode)
      document.body.style.backgroundColor =  '#030024'
      // setInterval(() => {
      //   document.title='dark mode is on'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Plainsurf'
      // }, 1500);
      
      // color:'white';
      // backgroundColor:'gray';
    }
    else
    {
      setmode('light')
      document.body.style.backgroundColor = "#ffffff"; 
      // setInterval(() => {
      //   document.title='light mode is on'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Plainsurf'
      // }, 1500);
      // // color:'gray';
      // // backgroundColor:'white';
  }
    
  }
  return (  
        <div>
      {/* <Bodycss/> */}
      {/* <Topdiv/> */}
      <Navbar1 mode={mode} togglemode={togglemode}/>
      {/* <Alert/> */}
    <div className='content'>
        {/* <Navbar /> */}
        <Update mode={mode} togglemode={togglemode}/>
        <br></br>
        <br></br>
       <Accordian mode={mode}/> 
       <br></br>
        <br></br>
       <Carousel/>
       <br></br>
       <br></br>
      </div>
        </div>
  )
}