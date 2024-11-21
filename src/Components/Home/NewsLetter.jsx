const NewsLetter = () => {
    return (
        <div className="w-[1300px] relative h-auto">
           <img className="rounded-3xl my-20" src="https://s3-alpha-sig.figma.com/img/9e37/d27f/5f1532e39729217193af879be4bfe9ba?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AS4dUZ3U30vy73RVfNypHkc5rEYGBPLsMzSL1rXuBYm14o7v5C~mDR4dGvvsU55ZgoQRB2kvLWTaJbrOoN5q2NFzl5FNTd~Qzdwv8P-b87eIn8OrPKPP9TuNDajXU4DIXQCyqo~DVDxsBu2vH60kjphvBNVx1J55Fwsgymk2KgSqhp2owu8K7xVDxh7ap-voAR855MmDF0c3G7DXfo4Gz6d2OR8q6LXQ-u3R-3vSQ3mSa75oogn02b~GHfc6YaGjttl52FS5KRX2vgywLeV9a2fP50BX1hvj2hGSG42z-Pf0bBhKHY9pwbIgnnTYe2Aw9bIPrnc4jz5Y5J6gc6tGlg__" alt="" /> 
           <div className="absolute top-0 inset-0">
            <h2 className="text-white text-5xl py-10 px-4 w-[350px]">Signup for the newsletter</h2>
            <div className="flex justify-between items-end">
            <p className="text-white px-4">Stay Connected</p>
           <div className="flex flex-col mt-20 mr-20" >
           <input className="bg-transparent border-white border-b-2 w-80 h-10" type="text" name="" id="" placeholder="First Name" />
           <div className="relative flex items-end">
           <input className="bg-transparent border-white border-b-2 w-80 h-10" type="text" name="" id="" placeholder="Email" />
           <svg className="absolute right-0" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5712 12.9892L12.0859 4.50391L10.6717 5.91812L16.7427 11.9892H4.01477V13.9892H16.7428L10.6717 20.0603L12.0859 21.4745L20.5712 12.9892Z" fill="white"/>
</svg>
           </div>

           </div>
            </div>
           </div>
        </div>
    );
};

export default NewsLetter;