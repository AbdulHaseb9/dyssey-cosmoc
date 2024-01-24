import React from 'react'

export const Hero = () => {
    return (
        <div className='px-6 xs:px-8 md:px-12 py-5'>
            <div className='bg-[url(./src/assets/images/herobg.png)] bg-no-repeat bg-bottom md:bg-left w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[30px]'>
                <div className='w-full h-full p-8 md:flex'>
                    <div className='w-full'>
                        <h1 className='text-3xl md:text-4xl lg:text-6xl font-semibold text-white xs:w-[300px] sm:w-[370px]'>Unveiling the
                            Wonders of
                            the Universe</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
