const Block = ({className, textColor, bgColor, title, description, bodyComponent}) => {
    return (
        <div className={`${className}`}>
            <div className="mx-10 flex flex-col justify-center items-center max-w-md min-w-52">
                <div className="flex flex-col items-center mb-2">
                    <h3 className={`text-3xl ${textColor}`}>{title}</h3>
                    <div className={`w-10 h-0.5 mt-1 mb-4 ${bgColor}`}></div>
                    <div>{description}</div>
                </div>
                <div>{bodyComponent}</div>
            </div>
        </div>
    );
};

export default Block;