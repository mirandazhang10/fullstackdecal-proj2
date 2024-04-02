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
            const clickedProfile = profilesData.find(profile => profile.name === clickedMember);
            setProfile(clickedProfile);
        }
    }, [clickedMember]);

    const openProfile = (memberID) => {
        setClickedMember(memberID);
    }

    const closeProfile = () => {
        setProfile(null);
    }

    return (
        <div className="gallery">
            {profilesData.map(profile => (
                <Member 
                    key={profile.name} 
                    profile={profile} 
                    onClick={openProfile}
                />
            ))}

            {profile && <ProfileViewer profile={profile} onClose={closeProfile} />}
        </div>
    );
};

export default MemberGallery;