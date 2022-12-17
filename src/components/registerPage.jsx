import React, { useEffect, useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { client } from '../utils/config';

const RegisterPage = () =>{
    return(
        <div className="flex justify-center items-center border w-[screen] h-screen relative">
            <div>
                <div>
                    <h1 className='text-4xl font-semibold text-white flex justify-center'>Register</h1>
                </div>
                <div className='flex flex-1 bg-neutral-600 rounded-lg m-5'>
                    <form className='flex flex-col gap-5 m-11' action="">
                        <input className='rounded-md' type="text" name="email" placeholder="Your email" required></input>
                        <input className='rounded-md' type="text" name="username" placeholder="Your username" required></input>
                        <input className='rounded-md' type="text" name="password" placeholder="Your password" required></input>
                        <Link to='/msgPage' className='flex justify-center'>
                            <button type='submit' className=' rounded-md text-2xl px-3 font-semibold bg-white'>Enter</button>
                        </Link>
                    </form>
                </div>
                <Link to='/'  className='flex justify-center text-white'>Return to Landing</Link>
            </div>
        </div>
    )
}

export default RegisterPage;