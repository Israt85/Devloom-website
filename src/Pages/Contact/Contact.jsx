import React from 'react';
import ContactBanner from '../../Components/Contact/ContactBanner';
import Section2 from '../../Components/Contact/Section2';
import ContactUs from '../../Components/Contact/ContactUs';
import GetInTouch from '../../Components/Contact/GetInTouch';
import Section3 from '../../Components/Contact/Section3';

const Contact = () => {
    return (
        <div className=''>
           <ContactBanner></ContactBanner>
           <Section2></Section2>
           <ContactUs></ContactUs>
           <Section3></Section3>
           <GetInTouch></GetInTouch>
        </div>
    );
};

export default Contact;