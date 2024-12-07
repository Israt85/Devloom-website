import React from 'react';

const Newsletterport = () => {
    return (
           <div className='lg:w-[1100px] w-full relative  mx-auto rounded-3xl h-[300px] bg-[#FFC310]'>
            <div className='flex  py-10 text-white flex-col justify-center items-center'>
                <p>Stay Connected</p>
                <p className='text-5xl mt-4'>Signup for the newsletter</p>
            <div className="flex flex-col mt-2 lg:mt-6" >
           <input className="bg-transparent border-slate-300 border-b-2 lg:w-80 w-60 mx-auto h-10" type="text" name="" id="" placeholder="First Name" />
           <div className="relative mt-4 flex items-end">
           <input className="bg-transparent border-slate-300 border-b-2 lg:w-80 w-60 mx-auto h-10" type="text" name="" id="" placeholder="Email" />
           <svg className='-ml-6' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5712 12.2079L12.0859 3.72266L10.6717 5.13687L16.7427 11.2079H4.01477V13.2079H16.7428L10.6717 19.279L12.0859 20.6932L20.5712 12.2079Z" fill="#262F68"/>
</svg>

           </div>

           </div>
            </div>
           
           </div>
          
    );
};

export default Newsletterport;