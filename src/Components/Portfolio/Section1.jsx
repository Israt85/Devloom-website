

const Section1 = () => {
    return (
        <div>
             <div className="flex lg:flex-row flex-col justify-center items-center  lg:justify-around lg:gap-40 gap-6 my-20">
                <p className="w-44 text-right leading-tight text-lg ">Build the best web and app with us we are devloom solutions</p>
                <p className="text-lg tracking-widest">web and app solutions</p>
                <p className="w-44 text-lg leading-tight text-right">Build the best web and app with us we are devloom solutions</p>
             </div>

            <h2 className="lg:text-9xl text-4xl relative py-20 font-audiowide text-center font-bold text-[#262F68] tracking-widest">PORTFOLIO</h2>
            <div className="flex absolute justify-center w-full gap-10">
                <div className="-mt-36 lg:block hidden -ml-60"><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">APP DESIGN</p></div>
                {/* 2nd */}
                <div className="-mt-48 lg:block hidden -ml-10"><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">WEB DESIGN</p></div>
                <div className="-mt-36 lg:block hidden ml-4"><p className="w-52 text-sm text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">APP DEVELOPMENT</p></div>
                <div className="-mt-44 lg:block hidden ml-16"><p className="w-40 text-center rounded-full text-xs py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">WEB DEVELOPMENT</p></div>
                <div className="-mt-40 absolute lg:block hidden right-10 "><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">BRANDING</p></div>
               
            </div>
        </div>
    );
};

export default Section1;