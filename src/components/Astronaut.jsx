import React from 'react'
import heroastronaut from "../assets/images/heroastronauts.png"
import btnplay from "../assets/images/btnplay.png"
import herotime from "../assets/images/herotime.png"
import heroexcercising from "../assets/images/heroexcercising.png"
import herowalks from "../assets/images/herowalks.png"


export const Astronaut = () => {
    return (
        <div className='px-6 xs:px-8 md:px-12 py-5'>
            <div className='w-full flex flex-col-reverse sm:flex-row'>
                <div className='w-full md:w-1/2'>
                    <div>
                        <p className='text-[171E27] text-sm'>At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos. </p>
                    </div>
                    <div className='flex items-center gap-3 xs:gap-6 sm:gap-6 my-5'>
                        <button className='text-white bg-[#0d0f12] px-3 py-2 rounded-lg'>Get Started</button>
                        <button className='flex items-center'>Watch the Video <img src={btnplay} alt="Play Icon" className='px-2' /></button>
                    </div>
                </div>
                <div className='w-full md:w-1/2 flex justify-center relative'>
                    <img src={heroastronaut} alt="Dyssey Astronaut Image" className='absolute -top-40 sm:-top-80 lg:-top-[24rem] lg:w-[500px]' />
                    <img src={herotime} alt="Time in Space" className='mt-24 xs:mt-32 sm:mt-0 lg:mt-10 z-10 md:h-[100px]' />
                    <img src={heroexcercising} alt="Excercising on Space" className='absolute -top-10 md:-top-48 -right-5 xs:right-0  w-40 lg:w-48 z-20' />
                    <img src={herowalks} alt="Excercising on Space" className='absolute -top-0 md:-top-32 -left-5 xs:left-0 w-40 lg:w-48 z-20' />
                </div>
            </div>
        </div>
    )
}
