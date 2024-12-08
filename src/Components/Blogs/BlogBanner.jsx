import React from 'react';

const BlogBanner = () => {
    return (
        <div className='w-full mx-auto h-96'>
            <h2 className='md:text-7xl text-4xl mx-6 mt-16 font-audiowide text-[#262F68]'>OUR INNOVATIVE
            </h2>
            <div className='flex lg:flex-row flex-col my-6 w-full lg:w-[1100px] lg:mx-6 justify-center items-center lg:justify-between'>
                <p className='md:text-7xl text-4xl uppercase font-audiowide text-[#262F68]'>BLOGS</p>
                <p className='lg:w-[520px] w-full text-lg font-Poppins text-center lg:text-right'>Devloom is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences</p>
            </div>
            <div className='flex justify-center lg:justify-end mx-32'>
                <div className='flex gap-2'>
                    <div className='w-20 h-4 rounded-full bg-[#FCCF12]'>

                    </div>
                    <div className='w-32 h-4 rounded-full bg-[#262F68]'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;