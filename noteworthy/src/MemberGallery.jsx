import "./MemberGallery.css";
import profilesData from "./assets/profiles.json"
import Member from "./Member"

const MemberGallery = () => {
    return (
        <div className="gallery">
            {profilesData.map(profile => (
                <Member key={profile.name} profile={profile} />
            ))}
        </div>
    );
};

export default MemberGallery;