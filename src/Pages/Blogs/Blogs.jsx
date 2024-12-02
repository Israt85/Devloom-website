import React from 'react';
import BlogBanner from '../../Components/Blogs/BlogBanner';
import Section2 from '../../Components/Blogs/Section2';
import Section3 from '../../Components/Blogs/Section3';
import Section4 from '../../Components/Blogs/Section4';
import Section6 from '../../Components/Blogs/Section6';
import Section5 from '../../Components/Blogs/Section5';

const Blogs = () => {
    return (
        <div>
            <BlogBanner></BlogBanner>
            <Section2></Section2>
            <Section3></Section3>
            <Section4></Section4>
            <Section5></Section5>
            <Section6></Section6>
        </div>
    );
};

export default Blogs;