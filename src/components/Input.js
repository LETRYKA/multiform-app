const Input = (props) => {
    const { inputLabel, inputIcon, placeHolder, error, errorMessage, value, onChange } = props;

    return (
        <div className="w-full flex flex-col mt-8">
            <p className="text-[black] text-sm mb-2.5">{inputLabel}</p>
            <div className="w-full h-14 border rounded-[10px] flex justify-start items-center">
                <img src={inputIcon} alt="icon" width={25} className="ml-4" />
                <div className="h-4/6 border border-[0.8px] ml-4"></div>
                <input value={value} onChange={onChange} placeholder={placeHolder} className="p-4 bg-transparent outline-none text-[black]" />
            </div>
            {error && <p className="text-[red] text-xs mt-2">{errorMessage}</p>}
        </div>
    );
};

export default Input;
