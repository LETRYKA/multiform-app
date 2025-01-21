const Button = (props) => {
    const { stepNext, btnLabel, priColor, secColor } = props;

    return (
        <button onClick={stepNext} className={`flex justify-center items-center w-full h-14 bg-[${priColor}] text-[${secColor}] rounded-[10px] transition duration-300 ease-in-out hover:bg-[${secColor}] hover:border hover:text-[${priColor}]`}>
            {btnLabel} <img src="/imgs/next.svg" alt="" width={13} height={13} className="ml-2" />
        </button>
    );
};

export default Button;
