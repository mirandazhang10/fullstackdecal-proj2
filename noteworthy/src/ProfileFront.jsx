import memberMap from './memberMap';

const ProfileFront = ({className, profile}) => {
    return (
        <div className={`${className}`}>
            <div className="flex justify-center m-10">
                <div className='profile-image'>
                    <img 
                        src={memberMap.get(profile.image)}
                        alt={profile.name}
                    />
                </div> 
                <div className='flex flex-col items-start text-left max-w-80 mt-3'>
                    <h2 className="text-xl"><b>{profile.name}</b></h2>
                    <h3 className="text-md"><b>{profile.position}</b></h3>
                    <p className="text-sm"><b>Voice Part:</b> {profile.voicePart}</p>
                    <p className="text-sm"><b>Semester in Noteworthy:</b> {profile.semesterNoteworthy}</p>
                    <p className="text-sm"><b>Semester in Berkeley:</b> {profile.semesterBerkeley}</p>
                    <p className="text-sm"><b>Major:</b> {profile.major}{profile.minor && <span className="text-sm">, <b>Minor:</b> {profile.minor}</span>}</p>
                    <p className="text-sm"><b>Interests:</b> {profile.interests}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileFront;