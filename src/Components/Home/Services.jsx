import { useState } from 'react';
import '../Home/sidetab.css'
const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null); 

    const handleClick = (index) => {
      setActiveIndex(index); 
    };
    const items = [
        { id: 1, label: "UI/UX Design" },
        { id: 2, label: "Web Development" },
        { id: 3, label: "Branding" },
        { id: 4, label: "App Development" },
      ];
    return (
        <div className="flex lg:flex-row flex-col gap-4 lg:gap-20">
            <div
  className="relative side-tab w-[40px] h-[180px] bg-[#FAD007] text-white font-bold flex items-center justify-center"
 
>
  <span>WHATWEDO</span>
</div>
            <div className="lg:w-[450px] lg:px-0 w-full lg:h-[500px]">
<p className="font-audiowide text-2xl lg:text-left text-center lg:text-5xl">Our Services</p>
<p className='lg:w-[450px] text-[#444444] font-Archivo text-lg mx-auto lg:mx-0 w-[250px]'>Devloom offers a range of design services that are tailored to meet the unique needs of each client</p>
<div className="lg:w-[350px] w-full h-[450px]">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`w-full h-20 my-6 flex justify-around items-center rounded-full ${
            activeIndex === index ? "bg-[#262F68] text-white" : "border text-black"
          }`}
          onClick={() => handleClick(index)}
        >
          <p
            className={`text-lg font-bold ${
              activeIndex === index ? "text-[#FAD007]" : "text-[#262F68]"
            }`}
          >
            {`0${item.id}`}
          </p>
          <p  className={`text-lg font-Archivo font-bold ${
              activeIndex === index ? "text-white" : "text-[#262F68]"
            }`}>{item.label}</p>
          <p>
            <svg
              className={`${
                activeIndex === index ? "fill-white" : "fill-[#262F68]"
              }`}
              width="25"
              height="15"
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M24.7071 8.20711C25.0976 7.81658 25.0976 7.18342 24.7071 6.79289L18.3431 0.428932C17.9526 0.0384078 17.3195 0.0384078 16.9289 0.428932C16.5384 0.819457 16.5384 1.45262 16.9289 1.84315L22.5858 7.5L16.9289 13.1569C16.5384 13.5474 16.5384 14.1805 16.9289 14.5711C17.3195 14.9616 17.9526 14.9616 18.3431 14.5711L24.7071 8.20711ZM0 8.5H24V6.5H0V8.5Z" />
            </svg>
          </p>
        </div>
      ))}
    </div>
            </div>
            <div className="lg:w-[700px] w-full gap-4 flex md:flex-row flex-col justify-center md:items-start items-center ">
                <img className="w-[350px] rounded-3xl h-[450px]" src="https://s3-alpha-sig.figma.com/img/fc5b/2118/cc8552b1b995c4ce5a13f3d35e3be234?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UuIGIDp5kos8YwtfJL0pzpyWZGuLY~Dx1MTrTx0wOHZK4qnmgpkHF-Q0ex1JAXurfOwFYH9iGmNYtEEb9EazKDcmC4jT1I5iFiOkr1RZ9EPY9EVt8gIcLgbXhJpDczKbtbCQWsk-DDjhzDXMPb3~GUlpluKNrrRT5DDq1EPOAb6VLfADyw8gUdR1Vqdm5kGnCj9IbnbG50g5ofYzsurIO0GnlK-OFRuk4aWATMjWdMqy5BUDhlm-2Ibb8x-mEi9Kq3TmSPotWCgDrVgFDnw4f1AYHwZf1lWgqDAOx-13GKd1WxYCpnaJLywd~88R3QniVpn2ZSS7rWegV8-C7-ubkw__" alt="" />
                <div className="h-[500px] flex flex-col gap-10">
                    <div className="w-[200px] text-white rounded-3xl h-[200px] bg-[#262F68]">
<p className="px-3 py-4">Ever wondered how design magic happens?</p>

<div className="flex justify-center font-Archivo items-center">
    <p className="w-[100px] font-semibold text-2xl">See how we work</p>
    <p className="w-16 h-16 flex justify-center items-center rounded-full bg-[#FAD007]"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2335 5.38823C23.4479 4.58803 22.973 3.76552 22.1728 3.55111L9.13284 0.0570541C8.33264 -0.157359 7.51013 0.317515 7.29572 1.11771C7.08131 1.91791 7.55618 2.74042 8.35638 2.95483L19.9475 6.06066L16.8417 17.6518C16.6273 18.452 17.1021 19.2745 17.9023 19.4889C18.7025 19.7033 19.525 19.2284 19.7394 18.4282L23.2335 5.38823ZM1.75 18.299L22.5346 6.29904L21.0346 3.70096L0.25 15.701L1.75 18.299Z" fill="white"/>
</svg>

</p>
</div>
                    </div>
                    <div className="w-[200px] text-black rounded-3xl h-[200px] bg-[#FAD007]">
<p className="px-3 py-4">Looking for design experts who can bring your vision to life?</p>

<div className="flex justify-center items-center">
    <p className="w-[120px] font-semibold text-2xl">Meet our expert</p>
    <p className="w-16 h-16 flex justify-center items-center rounded-full bg-white"><svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.2335 5.38823C23.4479 4.58803 22.973 3.76552 22.1728 3.55111L9.13284 0.0570541C8.33264 -0.157359 7.51013 0.317515 7.29572 1.11771C7.08131 1.91791 7.55618 2.74042 8.35638 2.95483L19.9475 6.06066L16.8417 17.6518C16.6273 18.452 17.1021 19.2745 17.9023 19.4889C18.7025 19.7033 19.525 19.2284 19.7394 18.4282L23.2335 5.38823ZM1.75 18.299L22.5346 6.29904L21.0346 3.70096L0.25 15.701L1.75 18.299Z" fill="#222222"/>
</svg>


</p>
</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;