import React from 'react'

export const Joincommunity = () => {
    return (
        <div id='join-community' className='bg-[url(./assets/images/background3.png)] w-full h-96 bg-cover bg-center bg-no-repeat bg-fixed'>
            <section className='w-full h-full flex justify-center items-center flex-col'>
                <h3 className='text-center text-white text-2xl xs:text-4xl font-bold'>Join our community</h3>
                <p className='w-[250px] xs:w-[430px] xs:px-4 text-center text-white my-5'>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
                <input type="text" className='px-5 py-2 rounded-xl focus:outline-blue-500' placeholder='Enter Your email . . . . .' />
                <button className='bg-blue-500 text-white py-2 px-4 rounded-xl mt-5'>Subscribe</button>
            </section>
        </div>
    )
}
