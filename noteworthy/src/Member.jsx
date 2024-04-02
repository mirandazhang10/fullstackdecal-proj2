import memberMap from "./memberMap";

const Member = ({profile, onClick}) => {
    // var imagePath = fullImagePath + profile.image;
    const handleClick = (event) => {
        event.stopPropagation();
        onClick(profile.id);
    }

    return (
        <div className="gallery-item relative" >
            <img src={memberMap.get(profile.image)} alt={profile.name} />
            <div className="gallery-overlay bg-trueblack/50" onClick={handleClick}></div>
            <div className="gallery-description text-white font-sans" >
                <h2 className="text-2xl"><b>{profile.name}</b></h2>
                {profile.position && <h3 className="text-lg"><b>{profile.position}</b></h3>}
                <h3 className="text-lg">{profile.voicePart}</h3>
            </div>
        </div>
    );
};

export default Member;