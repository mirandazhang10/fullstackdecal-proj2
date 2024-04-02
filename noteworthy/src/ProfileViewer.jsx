import { useState } from "react";
import ProfileFront from './ProfileFront';
import ProfileBack from "./ProfileBack";

function flipCard(isBack, setIsBack) {
    setIsBack(!isBack);
}

const ProfileViewer = ({profile, onClose, onSwitchProfile}) => {
    const [isBack, setIsBack] = useState(false);

    const switchProfile = (newProfileId) => {
        onSwitchProfile(((newProfileId % 18) + 18) % 18);
    };

    return (
        <>
            <div className="card z-30">
                <div className="close-button" onClick={onClose}></div>
                <div className="divider"></div>
                <div className="flip-button" onClick={() => flipCard(isBack, setIsBack)}>
                    <p>More About Me →</p>
                </div>
                {/* Component (front or back) goes here. */}
                {isBack ? <ProfileBack profile={profile} /> :<ProfileFront profile={profile} className="profile-information" />}
                <i className="arrow switch-button right -right-5" onClick={() => switchProfile(profile.id + 1)}></i>
                <i className="arrow switch-button left -left-5" onClick={() => switchProfile(profile.id - 1)}></i>
            </div>
        </>
    );
};

export default ProfileViewer;