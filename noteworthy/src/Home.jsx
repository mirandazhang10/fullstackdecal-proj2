import splash from "./assets/imgs/group/TEDxBerkeley.jpg";
import about from "./assets/imgs/group/group2.jpg"
import nwLogo from "./assets/logos/noteworthy-bear-white.png";
import sfPhoto from "./assets/imgs/promo/Noteworthy-at-ST-City-Hall.jpg"
import HeaderImage from "./HeaderImage";
import Block from "./Block";
import ContentCarousel from "./ContentCarousel";
import { InstagramEmbed } from 'react-social-media-embed';
import YouTubeCarousel from "./YouTubeCarousel";
import Footer from "./Footer";

const Home = () => {
    const Title = () => {
        return (
            <div className="flex flex-col items-center p-40 animate-fadein">
                <img
                    src={nwLogo}
                    width="150"
                    alt="Noteworthy logo"
                />
                <h1 className="tracking-wider text-9xl font-custom pt-2">NOTEWORTHY</h1>
                <h2 className="tracking-wide text-6xl font-custom">A CAPPELLA</h2>
            </div>
        );
    };

    const EventsDescription = () => {
        return (
            <p className="text-lg">
                We organize <b>Welcome Back to A Cappella</b>, Cal's a cappella orientation, 
                at the beginning of every semester. Hundreds of students turn out to 
                hear 13+ a cappella groups perform. The show is always fun, and we hope 
                you'll come!
            </p>
        );
    };

    const HireUsDescription = () => {
        return (
            <>
                <p className="text-lg">
                    We're no stranger to weddings, private parties, tailgates, and conferences.
                </p>
                <br></br>
                <p className="text-lg">
                    We've performed at venues including <b>San Francisco City Hall</b>, <b>University 
                    House</b>, the <b>Faculty Club</b>, and UC Berkeley's <b>2022 Commencement</b>.
                </p>
            </>
        );
    };

    const HireUsImage = () => {
        return (
            <>
                <div className="mt-2 relative max-h-[200px] overflow-hidden rounded-lg">
                    <img 
                        src={sfPhoto}
                        alt="Noteworthy at SF City Hall"
                    />
                </div>
            </>
        );
    };

    return (
        <>
            <HeaderImage className="h-screen overflow-hidden" imagePath={splash} titleComponent={<Title />} />
            {/* About Section */}
            <a id='about'></a>
            <div className="flex flex-center p-20 mx-10 mt-10">
                <div className="relative w-[3500px] min-h-[450px] overflow-hidden rounded-lg drop-shadow-md">
                    <img 
                        src={about}
                        alt="Noteworthy group photo"
                    />
                </div>
                <div className="flex flex-col justify-center items-start ml-24">
                    <h3 className="text-3xl text-orange">About Us</h3>
                    <div className="w-20 h-0.5 mt-1 mb-4 bg-orange"></div>
                    <div className="text-xl">
                        <p className="text-left">
                            We're a lower-voices a cappella group known for our fun performances and fresh takes on popular songs! It always feels sunny when we perform, and not just because of our golden vests!
                        </p>
                        <br></br> 
                        <p className="text-left">
                            Since our founding in 2000, we've gone million-view-viral on YouTube multiple times, released an album entirely composed of <b>original</b> songs, and performed at the 2022 UC Berkeley commencement.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-center justify-center my-5 mx-24">
                <Block textColor="text-blue" bgColor="bg-blue" title="Hire Us" description={<HireUsDescription />} bodyComponent={<HireUsImage />}/>
                <Block textColor="text-pink" bgColor="bg-pink" title="Events" description={<EventsDescription />} bodyComponent={<ContentCarousel />}/>
                <Block textColor="text-green" bgColor="bg-green" title="Follow Us" bodyComponent={<InstagramEmbed url="https://www.instagram.com/cal_noteworthy/" width={338} />}/>
            </div>

            <div className="flex flex-col justify-center items-center pt-10 pl-16 pr-16 pb-16 mx-32">
                <h3 className="text-3xl text-orange">Our Favorite Videos</h3>
                <div className="w-20 h-0.5 mt-1 mb-8 bg-orange"></div>
                <YouTubeCarousel />
                <h3 className="text-2xl">Find us on <a href="https://www.youtube.com/@UCBNoteworthy" target="_blank"><b className="text-red">YouTube</b>!</a></h3>
            </div>

            <Footer />
        </>
    );
};

export default Home;