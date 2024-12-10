import { Link } from "react-router-dom";
import bestproject from '../../assets/Images/bestproject.jpg'
import img1 from '../../assets/Images/portfoli1.jpg'
import img2 from '../../assets/Images/portfolio2.jpg'
import img3 from '../../assets/Images/portfolio3.jpg'
import img4 from '../../assets/Images/portfolio4.png'
import img5 from '../../assets/Images/portfolio5.jpg'
import fifth1 from '../../assets/Images/fifthimg1.jpg'
import fifth2 from '../../assets/Images/fifthimg2.jpg'
import fifth3 from '../../assets/Images/fifthimg3.jpg'
import sixth1 from '../../assets/Images/sixth1.png'
import sixth2 from '../../assets/Images/sixth2.png'
import sixth3 from '../../assets/Images/sixth3.jpg'
import seventh1 from '../../assets/Images/seventh1.jpg'
import seventh2 from '../../assets/Images/seventh2.jpg'
import seventh3 from '../../assets/Images/seventh3.jpg'
const BestProjects = () => {
    return (
        <div className="h-auto w-full">
            <div className="m-10">
                <p className="text-2xl font-Poppins">Our best</p>
                <p className="lg:text-[300px] text-6xl font-Inter font-bold text-[#262F68]">Projects</p>
            </div>
            {/* best projects */}
            <div>
                <Link to='/projectDetails'><div className="relative">
                    <img className="lg:w-[1280px] w-full h-full lg:h-[480px]" src={bestproject} alt="" />
                    <div className="w-[330px] absolute top-0 m-10">
                        <p className="my-2 text-lg font-semibold">Interactive overlays</p>
                        <p>Add custom branded graphics that lay over your live video to intro speakers, emphasize key points, and display clickable CTAs.</p>
                    </div>
                </div></Link>
                {/* second pic */}
                <div className="flex lg:flex-row flex-col my-6 justify-center items-center gap-6">
                     <div className="relative">
                        <img className="lg:w-[720px] w-full lg:h-[600px] h-full" src={img1} alt="" />
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-28 bg-[#FCCF12]">
                            <p className="text-xl font-bold">Q & A</p>
                            <p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
                        </div>
                     </div>
                     <div className="relative">
                        <img className="lg:w-[520px] w-full h-full lg:h-[600px]" src={img2} alt="" />
                        <div className="top-0 w-[520px] h-[600px] absolute bg-gradient-to-t from-transparent to-black">

                        </div>
                        <div className="w-80 absolute mx-6 bottom-10 text-white px-4 py-4 rounded-2xl h-32 bg-[#262F68]">
                            <p className="text-xl">HD Video Quality</p>
                            <p>Provide a better experience for your viewers with crystal clear HD video streaming.</p>
                        </div>
                     </div>

                </div>

                {/* third pic */}
                <div className="flex lg:flex-row flex-col my-6 justify-center items-center gap-6">
                     <div className="relative">
                        <img className="w-[620px] h-[330px]" src={img3} alt="" />
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-28 bg-[#FCCF12]">
                            <p className="text-2xl font-bold">Q & A</p>
                            <p>Moderate audience questions, allow upvoting, and bring attendees on-stage.</p>
                        </div>
                     </div>
                     <div className="relative">
                        <img className="w-[620px] h-[330px]" src={img4} alt="" />

                       
                        <div className="w-80 absolute mx-6 top-10 text-white px-4 py-2 rounded-2xl h-36 bg-[#262F68]">
                            <p className="text-xl font-bold">Chat</p>
                            <p>Chat is where engagement happens. With a slack-like experience, attendees can use emojis, reactions, and gifs to express themselves.</p>
                        </div>
                     </div>

                </div>

                {/* fourth part */}
                <div className="lg:w-[1280px] w-full h-full lg:h-[550px] bg-gradient-to-tr from-[#96B7CD] to-[#E68D83]">
                    <div className="flex justify-between">
                        <div className="w-[330px] mx-6 mt-10">
                              <p className="text-xl mb-2">Drag-n-drop Agenda Builder</p>
                              <p>Quickly rearrange your webinar’s sequence of actions and instantly generate an agenda that auto-updates as you move actions around.</p>
                        </div>
                        <div>
                            <img className="lg:w-[800px] w-full mt-16 h-[490px]" src={img5} alt="" />
                        </div>
                    </div>
</div>

{/* fifth part */}
<div className="flex lg:flex-row flex-col justify-center my-20 items-center gap-6">
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-full lg:w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full h-[300px] rounded-tl-lg" src={fifth1} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={fifth2} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={fifth3} alt="" />
    </div>
</div>
{/* sixth part */}
<div className="flex flex-col lg:flex-row justify-center my-10 items-center gap-6">
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={sixth1} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={sixth2} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={sixth3} alt="" />
    </div>
</div>

{/* 7th part */}
<div className="flex lg:flex-row flex-col justify-center my-10 items-center gap-6">
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Brand customization</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg">Brand the entire experience including registration pages, emails, backdrops, logo placements, fonts, overlays, and photo booth templates.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={seventh1} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Stage Kit</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg"> Design branded overlays, lower thirds, and right-side gradients directly in the Welcome platform.</p>
        <img className="lg:w-[400px] w-full lg:h-[300px] rounded-tl-lg" src={seventh2} alt="" />
    </div>
    <div className="w-full mx-auto px-1">
        <p className="text-[#FFC310] font-Poppins text-2xl">Green Room</p>
        <p className="font-Inter w-[330px] h-32 text-[#262F68] text-lg py-4">Invite speakers to a private waiting room to meet and prep to go on stage.</p>
        <img className="lg:w-[400px] mx-auto lg:h-[300px] rounded-tl-lg" src={seventh3} alt="" />
    </div>
</div>
            </div>
        </div>
    );
};

export default BestProjects;