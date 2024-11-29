

const Section1 = () => {
    return (
        <div>
             <div className="flex justify-around gap-40 my-20">
                <p className="w-44 text-right leading-tight text-lg ">Build the best web and app with us we are devloom solutions</p>
                <p className="text-lg tracking-widest">web and app solutions</p>
                <p className="w-44 text-lg leading-tight text-right">Build the best web and app with us we are devloom solutions</p>
             </div>

            <h2 className="text-9xl relative py-20 font-audiowide text-center font-bold text-[#262F68] tracking-widest">PORTFOLIO</h2>
            <div className="flex absolute justify-center w-full gap-10">
                <div className="-mt-36 -ml-60"><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">APP DESIGN</p></div>
                {/* 2nd */}
                <div className="-mt-48 -ml-10"><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">WEB DESIGN</p></div>
                <div className="-mt-36 ml-4"><p className="w-52 text-sm text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">APP DEVELOPMENT</p></div>
                <div className="-mt-44 ml-16"><p className="w-40 text-center rounded-full text-xs py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">WEB DEVELOPMENT</p></div>
                <div className="-mt-40 absolute right-10 "><p className="w-40 text-center rounded-full py-2 bg-[#FCCF12] font-audiowide text-[#262F68]">BRANDING</p></div>
               
            </div>
        </div>
    );
};

export default Section1;