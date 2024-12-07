import '../Home/sidetab.css'
const Section2 = () => {
    return (
        <div className='flex items-center gap-20'>
           <div
  className="relative side-tab w-[40px] h-[160px] bg-[#FAD007] text-white font-bold flex items-center justify-center"
 
>
  <span>ABOUTUS</span>
</div>



           <div className="flex flex-col lg:flex-row">
           <div className='lg:w-[400px] w-full lg:h-[200px]'>
           <p className='lg:text-8xl text-4xl font-audiowide text-[#262F68]'> ABout us</p>
            </div>
            <div className='lg:w-[600px] w-full lg:pr-10'>
<p className="font-Poppins text-lg">Devloom is a distinguished design and development agency based in the United Kingdom, known for our commitment to crafting exceptional digital experiences. Since  2018 Devloom has been reshaping the web & mobile apps with top-notch design and the power of no code.</p>
<div>

</div>
<div className='w-[150px] rounded-r-full bg-[#FAD007] h-[40px]'>
<p className="text-center py-2">Contact us</p>
</div>
            </div>
           </div>
        </div>
    );
};

export default Section2;