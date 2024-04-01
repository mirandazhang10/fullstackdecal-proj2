const fullImagePath = './assests/imgs/individual/';

const Member = ({profile}) => {
    const imagePath = fullImagePath + profile.image;

    return (
        <div className="gallery-item relative">
            <div className="absolute t-0 b-0 l-0 r-0 bg-trueblack/50 hover:cursor-pointer opacity-0 hover:opacity-1 transition-opacity"></div>
            <img src={imagePath} alt={profile.name} />
            <div className="absolute t-0 b-0 l-0 r-0 pb-5 pl-5 text-white font-sans">
                <h2>{profile.name}</h2>
                {profile.position && <h3>{profile.position}</h3>}
                <h3>{profile.voicePart}</h3>
            </div>
            
        </div>
    );
};

export default Member;