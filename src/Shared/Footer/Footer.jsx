const Footer = () => {
    return (
       <div className="h-[400px] w-[1300px] rounded-t-3xl  bg-[#262F68]">
         <div className=" flex justify-around items-center ">
            <div className="w-[330px] px-6">
                <p className="text-white text-xl font-bold pt-20">About Us</p>
                <div className="w-16 my-4 h-1 bg-[#FFC310]"></div>
                <p className="text-sm leading-relaxed text-gray-400">At Devloom solutions we are the best web &app design and development agency. we provide you consulting too.</p>
                <p className="text-sm my-3 leading-relaxed text-gray-400">©Mozo All Rights Reserved</p>
                <div className="flex gap-2">
                    <div className="w-10 flex justify-center items-center h-10 rounded-full bg-[#FFC310]">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1005 4.43368H14.6671V1.78368C13.9086 1.70481 13.1464 1.66586 12.3838 1.66702C10.1171 1.66702 8.56712 3.05035 8.56712 5.58368V7.76702H6.00879V10.7337H8.56712V18.3337H11.6338V10.7337H14.1838L14.5671 7.76702H11.6338V5.87535C11.6338 5.00035 11.8671 4.43368 13.1005 4.43368Z" fill="#262F68"/>
</svg>

                    </div>
                    <div className="w-10 flex justify-center items-center h-10 rounded-full bg-[#FFC310]">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.8337 1.83351C16.2073 2.10525 15.5448 2.28489 14.867 2.36684C15.5821 1.93961 16.118 1.26749 16.3753 0.475175C15.7033 0.875227 14.9676 1.15709 14.2003 1.30851C13.6874 0.752318 13.0045 0.382088 12.2585 0.255884C11.5125 0.12968 10.7458 0.25464 10.0785 0.611166C9.41119 0.967692 8.8811 1.53562 8.57136 2.22587C8.26161 2.91613 8.18973 3.68967 8.36699 4.42517C7.00818 4.35645 5.67903 4.00264 4.46587 3.38673C3.25272 2.77082 2.1827 1.90659 1.32533 0.850174C1.02461 1.37531 0.866591 1.97003 0.866992 2.57517C0.865926 3.13716 1.00384 3.69069 1.26845 4.18648C1.53307 4.68227 1.91617 5.10493 2.38366 5.41684C1.84031 5.40206 1.30856 5.25626 0.833659 4.99184V5.03351C0.837731 5.82092 1.11365 6.58275 1.61475 7.19015C2.11585 7.79754 2.81137 8.21321 3.58366 8.36684C3.28637 8.45731 2.97772 8.50501 2.66699 8.50851C2.4519 8.50599 2.23734 8.48649 2.02533 8.45017C2.24525 9.12752 2.67084 9.71946 3.24289 10.1436C3.81493 10.5678 4.50497 10.8031 5.21699 10.8168C4.01466 11.7629 2.53023 12.2792 1.00033 12.2835C0.721771 12.2844 0.443438 12.2677 0.166992 12.2335C1.72902 13.2421 3.54934 13.7774 5.40866 13.7752C6.69173 13.7885 7.9646 13.546 9.15292 13.0619C10.3412 12.5778 11.4212 11.8617 12.3297 10.9556C13.2381 10.0494 13.957 8.97133 14.4441 7.78426C14.9313 6.59719 15.177 5.32495 15.167 4.04184C15.167 3.90017 15.167 3.75017 15.167 3.60017C15.8209 3.11252 16.3849 2.5147 16.8337 1.83351Z" fill="#262F68"/>
</svg>


                    </div>
                    <div className="w-10 flex justify-center items-center h-10 rounded-full bg-[#FFC310]">
                    <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50032 4.83366C7.67624 4.83366 6.87065 5.07803 6.18545 5.53587C5.50024 5.99371 4.96619 6.64445 4.65083 7.40581C4.33546 8.16717 4.25295 9.00495 4.41372 9.8132C4.57449 10.6215 4.97133 11.3639 5.55405 11.9466C6.13677 12.5293 6.87919 12.9262 7.68745 13.0869C8.4957 13.2477 9.33348 13.1652 10.0948 12.8498C10.8562 12.5345 11.5069 12.0004 11.9648 11.3152C12.4226 10.63 12.667 9.82441 12.667 9.00032C12.667 7.89526 12.228 6.83545 11.4466 6.05405C10.6652 5.27264 9.60539 4.83366 8.50032 4.83366ZM8.50032 11.5003C8.00587 11.5003 7.52252 11.3537 7.1114 11.079C6.70028 10.8043 6.37984 10.4138 6.19063 9.95703C6.00141 9.50022 5.9519 8.99755 6.04836 8.5126C6.14482 8.02765 6.38293 7.58219 6.73256 7.23256C7.08219 6.88293 7.52765 6.64482 8.0126 6.54836C8.49755 6.4519 9.00022 6.50141 9.45703 6.69063C9.91385 6.87984 10.3043 7.20028 10.579 7.6114C10.8537 8.02252 11.0003 8.50587 11.0003 9.00032C11.0003 9.66337 10.7369 10.2993 10.2681 10.7681C9.79925 11.2369 9.16337 11.5003 8.50032 11.5003ZM12.667 4.00032C12.5022 4.00032 12.3411 4.0492 12.204 4.14077C12.067 4.23233 11.9602 4.36248 11.8971 4.51476C11.834 4.66703 11.8175 4.83458 11.8497 4.99623C11.8818 5.15788 11.9612 5.30637 12.0777 5.42291C12.1943 5.53946 12.3428 5.61882 12.5044 5.65098C12.6661 5.68313 12.8336 5.66663 12.9859 5.60356C13.1382 5.54048 13.2683 5.43367 13.3599 5.29663C13.4515 5.15959 13.5003 4.99848 13.5003 4.83366C13.5003 4.61264 13.4125 4.40068 13.2562 4.2444C13.1 4.08812 12.888 4.00032 12.667 4.00032ZM16.7837 5.86699C16.7698 5.15484 16.6346 4.45028 16.3837 3.78366C16.151 3.17705 15.7933 2.62615 15.3339 2.16674C14.8745 1.70733 14.3236 1.34967 13.717 1.11699C13.0504 0.866075 12.3458 0.730799 11.6337 0.716992C10.8253 0.666992 10.5587 0.666992 8.50032 0.666992C6.44199 0.666992 6.17532 0.666992 5.36699 0.716992C4.65484 0.730799 3.95028 0.866075 3.28366 1.11699C2.67705 1.34967 2.12615 1.70733 1.66674 2.16674C1.20733 2.62615 0.849672 3.17705 0.616992 3.78366C0.366075 4.45028 0.230799 5.15484 0.216992 5.86699C0.166992 6.68366 0.166992 6.95032 0.166992 9.00032C0.166992 11.0503 0.166992 11.317 0.216992 12.1337C0.230799 12.8458 0.366075 13.5504 0.616992 14.217C0.849672 14.8236 1.20733 15.3745 1.66674 15.8339C2.12615 16.2933 2.67705 16.651 3.28366 16.8837C3.95028 17.1346 4.65484 17.2698 5.36699 17.2837C6.20032 17.2837 6.44199 17.3337 8.50032 17.3337C10.5587 17.3337 10.8253 17.3337 11.6337 17.2837C12.3458 17.2698 13.0504 17.1346 13.717 16.8837C14.3236 16.651 14.8745 16.2933 15.3339 15.8339C15.7933 15.3745 16.151 14.8236 16.3837 14.217C16.6346 13.5504 16.7698 12.8458 16.7837 12.1337C16.7837 11.3003 16.8337 11.0503 16.8337 9.00032C16.8337 6.95032 16.8337 6.68366 16.7837 5.86699ZM15.117 12.0587C15.1024 12.5875 15.0039 13.1107 14.8253 13.6087C14.6776 14.0023 14.4442 14.3581 14.142 14.6503C13.8515 14.9527 13.495 15.1837 13.1003 15.3253C12.6012 15.5112 12.0745 15.6126 11.542 15.6253C10.7587 15.6253 10.517 15.667 8.49199 15.667C6.46699 15.667 6.23366 15.667 5.45032 15.667C4.91867 15.6533 4.39262 15.5548 3.89199 15.3753C3.49837 15.2276 3.14255 14.9942 2.85032 14.692C2.54795 14.4015 2.31692 14.045 2.17533 13.6503C1.99016 13.1538 1.88878 12.63 1.87533 12.1003C1.87533 11.267 1.87533 11.0587 1.87533 9.04199C1.87533 7.02532 1.87533 6.78366 1.87533 5.98366C1.88969 5.45133 1.99103 4.92494 2.17533 4.42533C2.31912 4.03419 2.54994 3.68084 2.85032 3.39199C3.1408 3.08962 3.49733 2.85859 3.89199 2.71699C4.39115 2.53107 4.91782 2.42968 5.45032 2.41699C6.23366 2.33366 6.47532 2.33366 8.50032 2.33366C10.5253 2.33366 10.767 2.33366 11.5503 2.33366C12.0854 2.34727 12.6147 2.44861 13.117 2.63366C13.5081 2.77746 13.8615 3.00827 14.1503 3.30866C14.4527 3.59914 14.6837 3.95567 14.8253 4.35032C15.0293 4.85746 15.1449 5.39581 15.167 5.94199C15.167 6.77532 15.2087 6.98366 15.2087 9.00032C15.2087 11.017 15.167 11.2587 15.167 12.0587H15.117Z" fill="#262F68"/>
</svg>


                    </div>
                    <div className="w-10 flex justify-center items-center h-10 rounded-full bg-[#FFC310]">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66954 5.83334H4.64607C4.39055 5.84875 4.1346 5.81132 3.8942 5.72338C3.6538 5.63544 3.43411 5.49887 3.24885 5.32222C3.0636 5.14557 2.91675 4.93262 2.81748 4.69667C2.71821 4.46072 2.66865 4.20684 2.6719 3.95088C2.67515 3.69491 2.73114 3.44237 2.83636 3.20902C2.94159 2.97566 3.0938 2.76651 3.28348 2.59462C3.47316 2.42272 3.69625 2.29178 3.9388 2.20997C4.18136 2.12816 4.43818 2.09724 4.69322 2.11913C4.94953 2.10056 5.2069 2.13523 5.44916 2.22095C5.69143 2.30666 5.91333 2.44158 6.10093 2.6172C6.28854 2.79282 6.43777 3.00536 6.53926 3.24145C6.64075 3.47754 6.69229 3.73207 6.69066 3.98905C6.68902 4.24602 6.63423 4.49988 6.52974 4.73465C6.42525 4.96943 6.27331 5.18005 6.08349 5.35326C5.89366 5.52648 5.67005 5.65855 5.42672 5.74117C5.18338 5.82379 4.92559 5.85517 4.66954 5.83334Z" fill="#262F68"/>
<path d="M6.34786 8.33301H3.01453V18.333H6.34786V8.33301Z" fill="#262F68"/>
<path d="M15.0975 8.33301C14.5358 8.33454 13.9817 8.46302 13.4767 8.70883C12.9716 8.95464 12.5286 9.31143 12.1809 9.75253V8.33301H8.84753V18.333H12.1809V13.7497C12.1809 13.3076 12.3565 12.8837 12.669 12.5712C12.9816 12.2586 13.4055 12.083 13.8475 12.083C14.2896 12.083 14.7135 12.2586 15.026 12.5712C15.3386 12.8837 15.5142 13.3076 15.5142 13.7497V18.333H18.8475V12.083C18.8475 11.5906 18.7505 11.1029 18.5621 10.6479C18.3736 10.193 18.0974 9.77958 17.7492 9.43136C17.401 9.08314 16.9876 8.80691 16.5326 8.61846C16.0776 8.43 15.59 8.33301 15.0975 8.33301Z" fill="#262F68"/>
</svg>


                    </div>
                </div>
            </div>
            <div>
            <p className="text-white text-xl font-bold pt-20">Quick Links</p>
            <div className="w-16 my-4 h-1 bg-[#FFC310]"></div>
            <ul className="text-gray-400">
                <li className="my-2">About</li>
                <li className="my-2">Company</li>
                <li className="my-2">popular Works</li>
                <li className="my-2">Blogs & News</li>
                <li className="my-2">Contact Us</li>
            </ul>
            </div>
            <div>
            <p className="text-white text-xl font-bold pt-20">Services</p>
            <div className="w-16 my-4 h-1 bg-[#FFC310]"></div>
            <ul className="text-gray-400">
                <li className="my-2">Website Design</li>
                <li className="my-2">Design & Development</li>
                <li className="my-2">UX/UI Strategy</li>
                <li className="my-2">APP Development</li>
                <li className="my-2">Branding</li>
            </ul>
            </div>
            <div className="w-[300px]">
            <p className="text-white text-xl font-bold pt-20">Newsletter</p>
            <div className="w-16 my-4 h-1 bg-[#FFC310]"></div>
            <p className="text-gray-400 w-[250px]">Information about current events related to our company</p>
            <div className="flex justify-between my-4">
                <p className="text-lg text-gray-500">support@gmail.com</p>
                <p className="w-20 flex justify-center items-center rounded-lg mr-4 h-10 bg-[#FFC310]">Sign Up</p>
            </div>
            </div>
           
        </div>
        <div className="w-full border-t-2 my-10">
         <ul className="flex justify-end gap-10 text-white my-4 mr-40">
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Contact</li>
         </ul>
        </div>
       </div>
    );
};

export default Footer;