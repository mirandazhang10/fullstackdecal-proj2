const HeaderImage = ({className, imagePath, titleComponent}) => {
    return (
        <div className="relative z-0">
            <div className="absolute t-0 l-0 w-full h-full flex flex-col justify-end bg-trueblack/50 text-white">
                <div>{titleComponent}</div>
            </div>
            <div className={`${className}`}>
                <img
                    src={imagePath}
                    alt="Noteworthy group photo"
                />
            </div>
        </div>
    );
};

export default HeaderImage;