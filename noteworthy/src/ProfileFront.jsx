import testImage from './assets/imgs/individual/alex.jpg'

const ProfileFront = ({className, id, profile}) => {

    return (
        <div className={`${className}`} id={`${id}`}>
            <div className="flex justify-center m-10">
                <div className='profile-image'>
                    <img 
                        src={testImage}
                        alt="Alex"
                    />
                </div>
                <div className='flex flex-col items-start text-left max-w-80 mt-3'>
                    <h2 className="text-xl"><b>Name</b></h2>
                    {/* {profile.position && <h3 className="text-lg"><b>Position</b></h3>} */}
                    <h3 className="text-md"><b>Position</b></h3>
                    <p className="text-sm"><b>Voice Part:</b> Bass</p>
                    <p className="text-sm"><b>Semester in Noteworthy:</b> 1st</p>
                    <p className="text-sm"><b>Semester in Berkeley:</b> 1st</p>
                    <p className="text-sm"><b>Major:</b> Physics<p className="text-md">, <b>Minor:</b> Electrical Engineering and Political Science</p></p>
                    <p className="text-sm"><b>Interests:</b> blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blahblah blah blah blah blah blah</p>
                </div>
                {/* Render other profile information here */}
            </div>
        </div>
    );
};

export default ProfileFront;