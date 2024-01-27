import React from 'react'
import logo from "../assets/images/logo.png"

export const Footer = () => {
    return (
        <>
            <div className='px-6 xs:px-8 md:px-12 py-5'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div>
                        <img src={logo} alt="Dyssey Logo" className='px-3' />
                    </div>
                    <div>
                        <ul className='lg:flex lg:items-start'>
                            <li><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>Connected</a></li>
                            <li className='my-2 lg:my-0'><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>Education</a></li>
                            <li className='my-2 lg:my-0'><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>Community</a></li>
                            <li className='my-2 lg:my-0'><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>About</a></li>
                        </ul>
                    </div>
                    <div>
                        <ul className='lg:flex lg:items-end'>
                            <li><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>Terms & Agreements</a></li>
                            <li className='my-2 lg:my-0'><a href="#" className='text-sm hover:text-gray-700 transition-all duration-150 px-3'>Privacy & Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4 py-2 border-y'>
                <a href="#">haseebsheikh2380@gmail.com</a>
            </div>
        </>
    )
}
