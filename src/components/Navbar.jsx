import React from 'react'
import logo from "../assets/images/logo.png"

export const Navbar = () => {
    return (
        <div className='px-6 xs:px-8 md:px-12 py-5'>
            <div className='flex justify-between items-center'>
                <div>
                    <img src={logo} alt="Dyssey logo" className='w-32' />
                </div>
                <div className='hidden md:block'>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Connected</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Education</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>Community</a>
                    <a href="#" className='px-1 mx-1 lg:mx-4 font-semibold'>About</a>
                </div>
                <div className='hidden md:block'>
                    <button className='bg-black px-4 py-2 text-white rounded-md font-semibold'>Sign In</button>
                </div>
            </div>
        </div>
    )
}
