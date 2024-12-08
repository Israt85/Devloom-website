import React from 'react';

const ContactUs = () => {
    return (
        <div className='flex md:flex-row flex-col my-10 h-60 mx-10 justify-center md:justify-end'>
            <div>
                <p className='font-audiowide mb-6 text-5xl'>Contact Us</p>
                <div className='md:w-[500px] w-full'>
                   
                   <div className='flex py-2 w-full border-b-2 justify-between'>
                    <p>Email</p>
                    <p>Devloomsolution@gmail.com</p>
                   </div>
                   <div className='flex py-2 w-full border-b-2 justify-between'>
                    <p>Phone Number</p>
                    <p>0336-8628642864</p>
                   </div>
                   <div className='flex py-2 w-full border-b-2 justify-between'>
                    <p>Address</p>
                    <p>Islamabad</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;