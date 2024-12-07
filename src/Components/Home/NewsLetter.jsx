const NewsLetter = () => {
    return (
        <div className="lg:w-[1300px] w-full my-20 relative h-auto">
           <img className="rounded-3xl h-96 lg:my-20" src="https://s3-alpha-sig.figma.com/img/9e37/d27f/5f1532e39729217193af879be4bfe9ba?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cnZ16CguNicexJZv0OQD9TdRZOc03PhcvKyyPUx3rc5hwEyKDTFWzuoZphinp1Jg~qQFTDfD2-h8a30WYF-Kpb51g25C26ABkRbjHeQ1ZKnpZ5WZTXFUyCW-z3~fKe7YaKFK-214d3SWwE7pbAtyypR3jubwvwqUZ8fFEES9ypQP7u8iRbUZVqAEh1p7oPiKSx-Ha9joX8qxzydV00tbyoN-VQvMQdnupHpXKPPcjKp1XCvliOJ2X81VDd9j~E0OTk64T1Zc1I2zptkxs~sbX7aVzaQvG0Eo2x5W8f12hvirTYces7~AT2NYAeqey9bOcwDMcOwGp51VtOg8AmEN4w__" alt="" /> 
           <div className="absolute top-0 inset-0">
            <h2 className="text-white text-5xl py-10 px-4 w-[350px]">Signup for the newsletter</h2>
            <div className="flex justify-between items-end">
            <p className="text-white px-4">Stay Connected</p>
           <div className="flex flex-col mt-20 mr-20" >
           <input className="bg-transparent border-white border-b-2 w-40 lg:w-80 h-10" type="text" name="" id="" placeholder="First Name" />
           <div className="relative flex items-end">
           <input className="bg-transparent border-white border-b-2 w-40 lg:w-80 h-10" type="text" name="" id="" placeholder="Email" />
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