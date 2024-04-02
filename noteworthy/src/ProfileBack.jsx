const ProfileBack = ({className, profile}) => {
    
    return (
        <div className={`back-container ${className}`}>
            <div className="profile-information back-information text-left">
                <p className="text-md">{profile.bio}</p>
            </div>
        </div>
    );
};

export default ProfileBack;