import React, { useState } from 'react'
import logo from "../assets/images/logo.png"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


export const Navbar = () => {
    const [respnav, setrespnav] = useState(false)
    return (
        <div className='px-6 xs:px-8 md:px-12 py-5'>
            <nav className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Dyssey logo" className='w-32' />
                </div>
                <div className='hidden md:block'>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Connected</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Education</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Community</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>About</a>
                </div>
                <div>
                    <div className='hidden md:block'>
                        <button className='bg-black px-4 py-2 text-white rounded-md font-semibold'>Sign In</button>
                    </div>
                    <div className='md:hidden'>
                        {respnav ? <RxCross2 className='cursor-pointer' onClick={() => setrespnav(!respnav)} /> : <FaBarsStaggered className='cursor-pointer' onClick={() => setrespnav(!respnav)} />}

                    </div>
                </div>
            </nav>
            {respnav ?
                <div className='flex flex-col items-center my-3 md:hidden'>
                    <a href="#" className='px-1 mx-1 my-2 lg:mx-4 font-semibold'>Connected</a>
                    <a href="#" className='px-1 mx-1 my-2 lg:mx-4 font-semibold'>Education</a>
                    <a href="#" className='px-1 mx-1 my-2 lg:mx-4 font-semibold'>Community</a>
                    <a href="#" className='px-1 mx-1 my-2 lg:mx-4 font-semibold'>About</a>
                </div>
                : null
            }
        </div>
    )
}
