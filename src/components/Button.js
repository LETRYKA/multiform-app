const Button = (props) => {
    const { stepNext, btnLabel, priColor, secColor, handleFormNextStep } = props;

    return (
        <button
            type="Submit"
            onClick={handleFormNextStep}
            className={`flex justify-center items-center w-full h-14 rounded-[10px] transition duration-300 ease-in-out`} style={{ background: `${priColor}`, color: `${secColor}` }}>
            {btnLabel}
            <img src="/imgs/next.svg" alt="Next" width={13} height={13} className="ml-2" />
        </button>
    );

};

export default Button;