import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className="p-10 flex justify-center items-center bg-purple w-full h-[220px]">
            <div className="flex items-center justify-center p-10">
                <SocialIcon className="mx-3" url="https://www.youtube.com/channel/UCDyMtV5cuuJZrg5Wm7VZmMA" />
                <SocialIcon className="mx-3" url="https://www.instagram.com/cal_noteworthy/" />
                <SocialIcon className="mx-3" url="https://www.facebook.com/Noteworthy" />
                <SocialIcon className="mx-3" url="https://www.tiktok.com/@uc_noteworthy" />
            </div>
            <div className="text-white pl-10">
                <p className="text-left">
                    We are a student group acting independently of the University of California. We take full responsibility for our organization and this website.
                </p>
                <br></br>
                <p className="text-left">
                    Copyright © Noteworthy A Cappella 2024
                </p>
            </div>
            
        </div>
    );
};

export default Footer;