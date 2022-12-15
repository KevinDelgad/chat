import React, { useEffect, useRef, useState } from 'react';
import { client } from '../utils/config';

function LoginPage(){
    return(
        <div className="flex justify-center items-center border w-[screen] h-screen relative">
            <div>
                <div>
                    <h1 className='text-4xl font-semibold text-white flex justify-center'>Login</h1>
                </div>
                <div className='flex flex-1 bg-neutral-600 rounded-lg m-5'>
                    <form className='flex flex-col gap-5 m-11' action="">
                        <input className='rounded-md' type="text" name="username" placeholder="Your username"></input>
                        <input className='rounded-md' type="text" name="password" placeholder="Your password"></input>
                        <button className=' rounded-md text-2xl font-semibold bg-white'>Enter</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage