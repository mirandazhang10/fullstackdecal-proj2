import { useState } from "react";
import ProfileFront from './ProfileFront';
import ProfileBack from "./ProfileBack";

var isFront = true;
const frontCard = <ProfileFront id="current-card" className="profile-information" />;
const backCard = <ProfileBack id="current-card" />;

function closeProfile(event) {
    const pvElement = event.target.parentNode;
    pvElement.remove();
}

function flipCard(profileNo) {
    const cardComponent = document.getElementById("current-card");
    console.log(document);
    console.log(cardComponent);
    // insert flip side card component using profileNo
    var flippedComponent;
    if (isFront) {
        flippedComponent = backCard;
    } else {
        flippedComponent = frontCard;
    }

    cardComponent.parentNode.insertBefore(flippedComponent, cardComponent.nextSibling);
    cardComponent.remove();
    isFront = !isFront;
}

const ProfileViewer = () => {
    const [profileNo, setProfileNo] = useState(0);
    

    return (
        <>
            <div className="card z-30">
                <div className="close-button" onClick={closeProfile}></div>
                <div className="divider"></div>
                {/* Component (front or back) goes here. */}
                {frontCard}
                {/* <ProfileBack /> */}
                <div className="flip-button" onClick={flipCard(profileNo)}>
                    <p>More About Me →</p>
                    {/* <i className="arrow right"></i> */}
                </div>
                <i className="arrow switch-button right -right-5"></i>
                <i className="arrow switch-button left -left-5"></i>
            </div>
            <div className="view-bg z-20"></div>
            
        </>
    );
};

export default ProfileViewer;