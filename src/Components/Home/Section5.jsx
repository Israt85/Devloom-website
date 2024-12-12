import '../Home/sidetab.css'
import '../Home/work.css'
import ProcessHStar from '../../assets/Images/ProcessHStar.png'
import ProcessStar from '../../assets/Images/ProcessStar.png'
import Design1 from '../../assets/Images/Design1.png'
import Design2 from '../../assets/Images/Design2.png'
import Design3 from '../../assets/Images/Design3.png'
import DesignArrow from '../../assets/Images/DesignArrow.png'

const Section5 = () => {
    return (
       <div>
       <div className="relative border-b-8 border-[#FCCF12] lg:mt-40 skew-y-[-4deg]">
  <header className="text-center">
    <h1 className="text-[72px] font-bold text-[#262F68] leading-[86.4px]">
      <span className="mx-5">Innovate</span>
      <img src={ProcessHStar} alt="" className="inline-block w-12 h-12 rotate-4" />
      <span className="mx-5">Inspire</span>
      <img src={ProcessHStar} alt="" className="inline-block w-12 h-12 rotate-4" />
      <span className="mx-5">Create</span>
    </h1>
  </header>
  <section className="relative text-center bg-[#1a1f3d] border-t-[10px] border-[#fad007] h-auto lg:h-[1300px] py-6 mb-4">
  <div className='w-[500px] mx-0'>
    <div
  className="absolute side-tab w-[40px] h-[160px] bg-[#FAD007] font-bold left-0 flex items-center justify-center"
 
>
  <span>PROCEDURE</span>
</div>
    </div>
    <img src={ProcessStar} className="absolute lg:block hidden px-10 left-[7%] top-[3%]" alt="" />
    
    <h2 className="text-[40px] font-normal text-white font-audiowide transform skew-y-[4deg] mx-auto max-w-[517px]">
      How Our Design Process{" "}
      <div className="inline-block work text-black bg-[#fad007] px-10 pt-2">
        <p>Works</p>
      </div>
    </h2>
    <p className="text-lg font-Archivo font-normal text-[#f3f3f3] transform skew-y-[4deg] mx-auto max-w-[680px] my-4 leading-[34px]">
      Devloom Solution follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.
    </p>
    <img src={ProcessStar} className="absolute lg:block hidden top-[20%] right-[10%]" alt="" />
    <div className="flex flex-col justify-center items-end mt-20 transform skew-y-[4deg]">
      {/* Steps */}
      {[
        {
          title: "Design",
          description: "Devloom gives you all the tools you need to create and host virtual experiences that look awesome and put your brand center stage.",
          imgSrc: Design1,
        },
        {
          title: "Develop",
          description: "Cut through the noise, grab your audience's attention, and turn passive attendees into active participants.",
          imgSrc: Design2,
        },
        {
          title: "Analyze",
          description: "Track the success of your events with deep insights and analytics measured across the entire attendee experience.",
          imgSrc: Design3,
        },
      ].map((step, index) => (
        <div
          key={index}
          className={`flex items-center gap-6 text-left bg-[#f3f3f3] text-black rounded-[66px] p-12 ${
            index === 0 ? "w-full" : index === 2 ? "w-[97%]" : "w-[98%]"
          }`}
        >
          <div className="w-[45%]">
            <h6 className="text-[18px] font-normal">Step {index + 1}:</h6>
            <h3 className="lg:text-[59px] text-xl font-normal flex items-center">
              {step.title}{" "}
              <img src={DesignArrow} alt="" className="lg:w-20 lg:h-20 w-10 h-10  lg:ml-4" />
            </h3>
            <p className="text-sm font-normal">{step.description}</p>
          </div>
          <div className="h-[203px]  rounded-[66px] overflow-hidden">
            <img src={step.imgSrc} alt="" className="h-full w-full" />
          </div>
        </div>
      ))}
    </div>
  </section>
</div>

       </div>
    );
};

export default Section5;