// Concatenating fullImagePath and profile.image results in a broken image; 
// Also, anything passed through src that was not a dynamic import will not work
// Map of profile.image to dynamic import will be maintained instead
// const fullImagePath = './assets/imgs/individual/';
import alex from "./assets/imgs/individual/alex.jpg";
import andrew from "./assets/imgs/individual/andrew.jpg";
import anthony from "./assets/imgs/individual/anthony.jpg";
import athena from "./assets/imgs/individual/athena.jpg";
import bhaskar from "./assets/imgs/individual/bhaskar.jpg";
import caitlyn from "./assets/imgs/individual/caitlyn.jpg";
import chris from "./assets/imgs/individual/chris.jpg";
import dell from "./assets/imgs/individual/dell.jpg";
import eddie from "./assets/imgs/individual/eddie.jpg";
import ellington from "./assets/imgs/individual/ellington.jpg";
import ethan from "./assets/imgs/individual/ethan.jpg";
import jerry from "./assets/imgs/individual/jerry.jpg";
import jessica from "./assets/imgs/individual/jessica.jpg";
import justin from "./assets/imgs/individual/justin.jpg";
import kian from "./assets/imgs/individual/kian.jpg";
import madlen from "./assets/imgs/individual/madlen.jpg";
import maya from "./assets/imgs/individual/maya.jpg";
import stephanus from "./assets/imgs/individual/stephanus.jpg";
import tom from "./assets/imgs/individual/tom.jpg";

const memberMap = new Map();
memberMap.set("alex.jpg", alex);
memberMap.set("andrew.jpg", andrew);
memberMap.set("anthony.jpg", anthony);
memberMap.set("athena.jpg", athena);
memberMap.set("bhaskar.jpg", bhaskar);
memberMap.set("caitlyn.jpg", caitlyn);
memberMap.set("chris.jpg", chris);
memberMap.set("dell.jpg", dell);
memberMap.set("eddie.jpg", eddie);
memberMap.set("ellington.jpg", ellington);
memberMap.set("ethan.jpg", ethan);
memberMap.set("jerry.jpg", jerry);
memberMap.set("jessica.jpg", jessica);
memberMap.set("justin.jpg", justin);
memberMap.set("kian.jpg", kian);
memberMap.set("madlen.jpg", madlen);
memberMap.set("maya.jpg", maya);
memberMap.set("stephanus.jpg", stephanus);
memberMap.set("tom.jpg", tom);

const Member = ({profile}) => {
    // var imagePath = fullImagePath + profile.image;

    return (
        <div className="gallery-item relative">
            <div className="absolute t-0 b-0 l-0 r-0 bg-trueblack/50 hover:cursor-pointer opacity-0 hover:opacity-1 transition-opacity"></div>
            <img src={memberMap.get(profile.image)} alt={profile.name} />
            <div className="absolute t-0 b-0 l-0 r-0 pb-5 pl-5 text-white font-sans">
                <h2>{profile.name}</h2>
                {profile.position && <h3>{profile.position}</h3>}
                <h3>{profile.voicePart}</h3>
            </div>
            
        </div>
    );
};

export default Member;