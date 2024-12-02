import React from 'react';

const Section4 = () => {
    return (
       <div className='w-full h-auto my-20'>
        <div className='flex justify-between m-4'>
            <p className='text-4xl font-bold font-Poppins'>Our Recent Posts</p>
            <div className='flex justify-center items-center'>
                <p className='w-32 text-white py-2 text-center h-10 rounded-full bg-[#262F68]'>View All</p>
            </div>
        </div>
         <div className='flex justify-center gap-10 mx-4'>
           <div>
            <img className='w-[750px] h-[400px] rounded-2xl' src="https://s3-alpha-sig.figma.com/img/3b03/8e60/2a180a687835ba0d11f524d19132d366?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T0iNWiPBqDWMc6H0wQZJj6WVUCVumdJrJTjZ3PxLSJwykjjVVudPBLuUO~qjKFHI8N3xlvlVdTabFMFv9K~yv3OOPu3nISHXQBqFsaBlsjyWI5~vG-Muz3sx51BQPrLt8C40QvrUFq0nYHoWBQTyYl~z3MBp620joRbl6HZujd0cjYWu3kQH9~qUgf8XNQXeZ~o0M4-Ens1hRYw9u1i73ApCAsOcLMmeaGJM82xNhoOz4-HPxIMENmnhgHQ7V8Dh7LvJRQqLj-BVwQF0a73ZTK4WHmuUtqjsilv1clcHcIAIy2xNcbe5TpOZQrsFBYRj1Oi-5cdcULR3gXoBMlQOjA__" alt="" />
            </div> 
            <div className='w-full'>
               <p>DEVELOPMENT <span className='text-[#999999] text-sm ml-4'>16 March 2023</span></p>
               <p className='text-3xl font-bold w-[550px]'>How to make a Game look more attractive with New VR & AI Technology</p>
               <p className='w-[500px] my-10'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
               </p>
               <div className='w-40 flex mt-16 justify-center items-center h-10 rounded-full border-2 border-[#262F68]'>
                         <p className='text-[#262F68] font-bold'>Read More</p>
                    </div>
                </div>        </div>
       </div>
    );
};

export default Section4;