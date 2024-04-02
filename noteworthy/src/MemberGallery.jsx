import { useState, useEffect } from "react";
import "./MemberGallery.css";
import profilesData from "./assets/profiles.json"
import Member from "./Member"
import ProfileViewer from "./ProfileViewer";

const MemberGallery = () => {
    const [clickedMember, setClickedMember] = useState(null);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (clickedMember !== null) {
            const clickedProfile = profilesData.find(profile => profile.id === clickedMember);
            setProfile(clickedProfile);
        }
    }, [clickedMember]);

    const openProfile = (memberID) => {
        setClickedMember(memberID);
        document.body.classList.toggle("view-mode");
        document.getElementById("view-bg").classList.toggle("view-bg-none");
        document.getElementById("view-bg").classList.toggle("view-bg-clicked");
    }

    const closeProfile = () => {
        setProfile(null);
        setClickedMember(null);
        document.body.classList.toggle("view-mode");
        document.getElementById("view-bg").classList.toggle("view-bg-none");
        document.getElementById("view-bg").classList.toggle("view-bg-clicked");
    }

    const switchProfile = (newProfileId) => {
        console.log(newProfileId);
        const newProfile = profilesData.find(profile => profile.id === newProfileId);
        console.log(newProfile);
        setProfile(newProfile);
    };
    

    return (
        <div className="gallery">
            {profilesData.map(profile => (
                <Member 
                    key={profile.name} 
                    profile={profile} 
                    onClick={openProfile}
                />
            ))}

            {profile && <ProfileViewer profile={profile} onClose={closeProfile} onSwitchProfile={switchProfile} />}
            <div id="view-bg" className="view-bg-none z-20"></div>
        </div>
    );
};

export default MemberGallery;