import Section1 from "../../Components/Home/Section1";
import Section2 from "../../Components/Home/Section2";
import Section3 from "../../Components/Home/Section3";
import Section5 from "../../Components/Home/Section5";
import Services from "../../Components/Home/Services";
import HomeBanner from "../../Components/HomeBanner";


const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Section1></Section1>
            <Section2></Section2>
            <Section3></Section3>
            <Services></Services>
            <Section5></Section5>
        </div>
    );
};

export default Home;