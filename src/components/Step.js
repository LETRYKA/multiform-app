

const StepCard = (props) => {
    const { stepNum, stepDesc, priColor, secColor, thirdColor } = props;

    return (
        <div className="w-80 h-16 bg-[white] rounded-[10px] flex justify-start items-center cursor-pointer" style={{ background: `${priColor}` }}>
            <div className="w-[1.4rem] h-[1.4rem] rounded-[50%] flex justify-center items-center text-xs ml-5" style={{ background: `${secColor}` }}><p className="mt-[2px]">{stepNum}</p></div>
            <p className="text-sm font-medium ml-3" style={{ color: `${thirdColor}` }}>{stepDesc}</p>
        </div>
    );
};

export default StepCard;
