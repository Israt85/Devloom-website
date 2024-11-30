import React from 'react';

const Section2 = () => {
    return (
        <div className='w-full flex h-auto'>
            <img className='w-[450px] rounded-lg mx-auto h-[650px]' src="https://s3-alpha-sig.figma.com/img/fdcd/38db/3a373dc39accd95d2a4574d166f36a55?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XZ-HQPOiV2xqbZe9a6lGxQ8jJK5GIPi4o6~h3gs5~S9kAxxZbYiPVBF4sPDJ6OyqmRnvWoBbzdaTyLpYmmXaRNeOgn3q5Gyl~b7HQuV9tdnA-Wdmqefjle3FIRJhnkzBpUasPPSpAn3HvGgXjfq-D0fzdzSNiWPr29kxEVmgcZy2NqDzIy1ZYJqWsVEojn1edjNX4f6LXhScmJ4KNGr3fXJ3y48C~i0c7APNsaUeTFUbIYUp1WuKb-RLg6dD2lKV9QcGxiJKJATgyTPs9rVGhatw9L0VeZou50vg4u8fhahEaAxpmhw8GtqiE2r~lYmMhMFOLbo4f-qZSFcYhlzy2Q__" alt="" />
            <div className='w-full'>
                <div className=' flex mt-6 justify-around'>
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' type="text" placeholder='First Name' />
                    <input className='w-72 pb-4 border-b-2 border-[#00000066]' placeholder='Last Name' type="text" />
                </div>
                <div className=' my-10 flex justify-around'>
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