import React from 'react'

export const About = () => {
    return (
        <div id='about' className='px-6 xs:px-8 md:px-12 py-10'>
            <div className='w-full grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <section className='p-5 shadow-md rounded-lg'>
                    <div>
                        <h3 className='text-4xl font-bold text-[#a9c2cb]'>01.</h3>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-xl font-bold'>Online free courses and
                            tutorials</h4>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700'>Dive into the basics of astronomy.
                            Learn about stars, planets, galaxies,
                            and the tools astronomers
                            use to explore the universe.</p>
                    </div>
                </section>
                <section className='p-5 shadow-md rounded-lg'>
                    <div>
                        <h3 className='text-4xl font-bold text-[#a9c2cb]'>02.</h3>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-xl font-bold'>Resources for teachers and educators</h4>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700'>Dive into the basics of astronomy.
                            Learn about stars, planets, galaxies,
                            and the tools astronomers
                            use to explore the universe.</p>
                    </div>
                </section>
                <section className='p-5 shadow-md rounded-lg'>
                    <div>
                        <h3 className='text-4xl font-bold text-[#a9c2cb]'>03.</h3>
                    </div>
                    <div className='my-3'>
                        <h4 className='text-xl font-bold'>Book recommendations and reviews</h4>
                    </div>
                    <div>
                        <p className='text-sm text-gray-700'>Dive into the basics of astronomy.
                            Learn about stars, planets, galaxies,
                            and the tools astronomers
                            use to explore the universe.</p>
                    </div>
                </section>
            </div>
        </div>
    )
}
