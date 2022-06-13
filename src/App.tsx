
import React, { useState, useEffect } from 'react';
import Speakers from './Components/Speakers/Speakers';
import Loading from './Components/Loading';
import Speakers from './Components/Speakers/Speakers';
import React from "react";
import About from "./About";
import Team from './Components/Teams/Teams'

const Page =() =>{
  return(
    <>
        <About/>
       <Speakers />
      <Team />
      </>)}


function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    return (
        <div>
            {/* <h1 className='text-3xl font-bold underline'>Cloud Community Days</h1> */}
            {loading ? <Loading /> : <Page />}
        </div>
    );





export default App
