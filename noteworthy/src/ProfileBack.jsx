const ProfileBack = ({className, profile}) => {
    
    return (
        <div className={`back-container ${className}`}>
            <div className="profile-information back-information text-left">
                <p className="text-xl">{profile.bio}</p>
            </div>
        </div>
    );
};

export default ProfileBack;