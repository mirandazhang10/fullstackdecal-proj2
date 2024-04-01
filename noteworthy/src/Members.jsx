import Footer from "./Footer";
import HeaderImage from "./HeaderImage";
import groupImage from "./assets/imgs/group/group1-cropped.jpg"

const Members = () => {
    const Title = () => {
        return (
            <h1 className="tracking-wider p-16 text-9xl font-custom">People of Note</h1>
        );
    };

    return (
        <>
            <HeaderImage className="h-[600px] overflow-hidden" imagePath={groupImage} titleComponent={<Title />} />
            <div className="mx-40 my-20">

            </div>
            <Footer />
        </>
    );
};

export default Members;