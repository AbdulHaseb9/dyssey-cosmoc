import React from 'react'
import companyone from "../assets/images/company(1).png"
import companytwo from "../assets/images/company(2).png"
import companythree from "../assets/images/company(3).png"
import companyfour from "../assets/images/company(4).png"


export const Company = () => {
    return (
        <div className='px-6 xs:px-8 md:px-12 py-5'>
            <div className='grid grid-cols-2 md:grid-cols-4 place-items-center'>
                <img src={companyone} alt="Company One"  className='h-8 my-2'/>
                <img src={companytwo} alt="Companytwo"  className='h-8 my-2'/>
                <img src={companythree} alt="Companythree" className='h-8 my-2' />
                <img src={companyfour} alt="Companyfour"  className='h-8 my-2'/>
            </div>
        </div>
    )
}
