import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { client } from '../utils/config';
const LandingPage = () =>{
  return (
    <div className="border w-[screen] h-screen relative">
      <div className="flex justify-center py-2 px-3.5 mt-5">
        <h1 className="text-5xl font-semibold text-white">Group Chat</h1>
      </div>
      <div className=' flex justify-center mt-10'>
        <img src={require('./ChatPreview.png')} alt='Chat app preview image' className="text-2xl font-semibold text-white w-2/3 rounded-lg"></img>
      </div>
      <nav className='flex justify-center mt-20 gap-10'>
        <Link to='/register' className='text-2xl font-semibold text-white bg-neutral-600 p-5 rounded-lg'>Register</Link>
        <Link to='/login' className='text-2xl font-semibold text-white bg-neutral-600 p-5 rounded-lg'>Login</Link>
      </nav>
    </div>
  );
};



export default LandingPage;
