import React from 'react';

const Section2 = () => {
    return (
        <div className='w-full min-h-screen'>
            <div className='flex justify-between mx-10'>
                <p className='w-[500px] text-[#262F68] leading-tight text-5xl font-audiowide'>Grocery App development</p>
                <div className='w-[500px]'>
                    <p className='w-full border-b-4 p-4 border-[#FFC310] font-audiowide text-[#262F68]'>Project Type</p>
                    <ul className='flex gap-4 my-4 justify-center'>
                        <li className='text-xl font-bold text-[#FFC310]'>Design .</li>
                        <li className='text-xl font-bold text-[#FFC310]'>Development .</li>
                        <li className='text-xl font-bold text-[#FFC310]'>Deployement .</li>
                        <li className='text-xl font-bold text-[#FFC310]'>Testing .</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around my-10 gap-10'>
                <div className='w-[550px] text-[#666666]'>
                    <p className='w-full text-lg font-Poppins'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.
                    We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google.</p>
                    <p className='font-Poppins text-lg my-6'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others.</p>

                </div>
                <div>
                    <img className='w-[500px] rounded-2xl h-[450px]' src="https://s3-alpha-sig.figma.com/img/3bc2/a4b8/88af81122574beddeace54cd6d279959?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nc8JwY4~ILVPgjBb9hNJo-7ywR4~WEOnWf92hQ492BEFNc081-2V2256CXyBkgstJ1wLAGrPFaydaLOWwOOvta1JCp5OgZON11usVTLcZH6ysWPIcYzyaWJlnCdgEdQ7yvX6pWkj7bzZyR-n20pNfEaUI0A7Rg43H1fa-yYdlgkjKyRQum-jgH1MzNnRmUWdRxG1Q4~bssMzd1BHm0z11nhfWB06x3WACeHrYC6CH5K-B7CFxP-v-KdUB7gbm-O3e-8R0PjrgZH9gJm5jW72h7QaSTLuz3bnOAorSoqyMXjDLesPsO2MoeTXHb18~gLxL2uBqq~GBxEVbBdNF9Lp-A__" alt="" />
                </div>
            </div>
            <p className='mx-10 text-[#666666] text-lg font-Poppins tracking-wider'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and   communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others.</p>
        </div>
    );
};

export default Section2;