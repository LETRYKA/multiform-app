const Input = (props) => {
    const { inputLabel, inputIcon, placeHolder, name, errors, handleChange } = props;

    return (
        <div className="w-full flex flex-col mt-4">
            <div className="flex flex-row items-center mb-2">
                <p className="text-[black] text-sm">{inputLabel}</p>
                {errors?.[name] && (<p className="text-[red] text-base font-bold ml-2">*</p>)}
            </div>
            <div className="w-full h-14 border rounded-[10px] flex justify-start items-center shadow-sm">
                <img src={inputIcon} alt="icon" width={25} className="ml-4" />
                <div className="h-4/6 border border-[0.8px] ml-4"></div>
                <input onChange={handleChange} name={name} placeholder={placeHolder} className="p-4 w-full bg-transparent outline-none text-[black]" />
            </div>
            {errors?.[name] && errors[name].length > 0 && (
                <p className="text-[red] text-xs mt-2">{errors[name]}</p>
            )}
        </div >
    );
};

export default Input;
