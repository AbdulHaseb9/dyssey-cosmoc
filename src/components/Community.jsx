import React from 'react'
import { MdHub } from "react-icons/md";
import { MdAssignment } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";


export const Community = () => {
    return (
        <div id='community' className='px-6 xs:px-8 md:px-12 py-8'>
            <div className='w-full md:flex'>
                <div className='w-full md:w-1/2'>
                    <h2 className='text-4xl font-bold md:pr-5'>Join our vibrant community
                        of space enthusiasts
                        where you can</h2>
                </div>
                <div className='mt-10 md:mt-0 w-full md:w-1/2 grid gap-2 grid-cols-1 xs:grid-cols-2'>
                    <div className='my-3'>
                        <MdHub className='bg-[#a9c2cb] text-4xl p-2 rounded-md' />
                        <h3 className='text-xl font-semibold my-2'>Astronomy 101</h3>
                        <p className='text-sm h-18'>Dive into the basics of astronomy.
                            Learn about stars, planets, galaxies,
                            and the tools astronomers use to explore
                            the universe.</p>
                    </div>
                    <div className='my-3'>
                        <MdAssignment className='bg-[#a9c2cb] text-4xl p-2 rounded-md' />
                        <h3 className='text-xl font-semibold my-2'>Latest Discoveries</h3>
                        <p className='text-sm h-18'>Stay up-to-date with the most
                            recent breakthroughs and discoveries
                            in the field of astrophysics and
                            space exploration.</p>
                    </div>
                    <div className='my-3'>
                        <MdBiotech className='bg-[#a9c2cb] text-4xl p-2 rounded-md' />
                        <h3 className='text-xl font-semibold my-2'>Space Exploration</h3>
                        <p className='text-sm h-18'>Explore the latest missions,
                            both past and present, from NASA,
                            ESA, SpaceX, and other space agencies
                            and organizations.</p>
                    </div>
                    <div className='my-3'>
                        <IoIosRocket className='bg-[#a9c2cb] text-4xl p-2 rounded-md' />
                        <h3 className='text-xl font-semibold my-2'>Space Technology</h3>
                        <p className='text-sm h-18'>Delve into the cutting-edge
                            technology powering space exploration,
                            from spacecraft and telescopes to propulsion
                            systems and space habitats.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
