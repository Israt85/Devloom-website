import React from 'react';
import img1 from '../../assets/Images/contact1.jpg'
const Section2 = () => {
    return (
        <div className='w-full flex lg:flex-row flex-col h-auto'>
            <img className='md:w-[450px] px-2 w-full h-full rounded-lg mx-auto md:h-[650px]' src={img1} alt="" />
            <div className='w-full'>
                <div className=' flex md:flex-row flex-col items-center justify-center mt-6 md:justify-around'>
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' type="text" placeholder='First Name' />
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' placeholder='Last Name' type="text" />
                </div>
                <div className=' my-10 flex md:flex-row flex-col justify-center items-center md:justify-around'>
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' type="email" placeholder='Mail' />
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' placeholder='Phone' type="text" />
                </div>
            {/* Checkbox */}
            <div class="mx-16 my-20">
  <p class="font-medium">What service do you need?</p>

 <div className='flex flex-wrap my-6 gap-16 items-center'>
 <label class="flex gap-2 items-center space-x-2">
    <input
      type="checkbox"
      name="service"
      value="Web Design"
      class="w-6 h-6 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
    />
    <span>Web Design</span>
  </label>

  <label class="flex gap-2 items-center space-x-2">
    <input
      type="checkbox"
      name="service"
      value="App Development"
      class="w-6 h-6 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
    />
    <span>App Design</span>
  </label>

  <label class="flex gap-2 items-center space-x-2">
    <input
      type="checkbox"
      name="service"
      value="SEO"
      class="w-6 h-6 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
    />
    <span>Graphics Design</span>
  </label>
  <label class="flex gap-2 items-center space-x-2">
    <input
      type="checkbox"
      name="service"
      value="SEO"
      class="w-6 h-6 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
    />
    <span>Digital Marketing</span>
  </label>
  <label class="flex gap-2 items-center space-x-2">
    <input
      type="checkbox"
      name="service"
      value="SEO"
      class="w-6 h-6 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 focus:ring-2 focus:outline-none"
    />
    <span>Others</span>
  </label>
 </div>
</div>

{/* Message */}
<div className='flex flex-col my-6 mx-16 '>
<p className='font-bold'>Messages</p>
<input className='w-full my-4 border-b-4 pb-1 pt-4 border-[#00000066]' type="text" placeholder='Write your message...' name="" id="" />
</div>

{/* Button */}
<div className='flex justify-end mx-10 items-end'>
    <button className='bg-[#262F68] px-4 py-2 rounded-full text-white'>Send Message</button>
</div>
            </div>
        </div>
    );
};

export default Section2;