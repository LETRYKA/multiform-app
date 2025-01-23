import Next from "@/icons/next"

const Button = (props) => {
    const { step, btnLabel, priColor, secColor, handleFormNextStep } = props;

    return (
        <button
            type="Submit"
            onClick={handleFormNextStep}
            className={`flex justify-center items-center w-full h-14 rounded-[10px] transition duration-300 ease-in-out border`} style={{ background: `${priColor}`, color: `${secColor}` }}>
            {btnLabel}
            <span className="ml-2"><Next /></span>
        </button>
    );

};

export default Button;