const fullImagePath = '/assests/imgs/individual/';

const Profile = ({profile}) => {
    const imagePath = fullImagePath + profile.image;

    return (
        
        <div className="profile">
            <img src={imagePath} alt={profile.name} />
            <h2>{profile.name}</h2>
            {/* Render other profile information here */}
        </div>
    );
};

export default Profile;