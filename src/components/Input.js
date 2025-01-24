import { useState, useEffect } from "react";

import Eye from "@/icons/eye";
import Eyeoff from "@/icons/eye-off";

const Input = (props) => {
    const { inputLabel, InputIcon, placeHolder, name, errors, handleChange, type, showHandler, confirmShowHandler, value } = props;

    // Password Show/Hide Logic
    const [show, setShow] = useState(false);
    const [confirmShow, setConfirmShow] = useState(false);
    const [iconVisibility, setIconVisibility] = useState(false);
    const [confirmIconVisibility, setConfirmIconVisibility] = useState(false);

    const showButtonHandler = () => {
        if (name === "password") {
            setShow(true)
            setIconVisibility(!iconVisibility);
        }
    }
    const confirmShowButtonHandler = () => {
        if (name === "confirmPassword") {
            setConfirmShow(true)
            setConfirmIconVisibility(!confirmIconVisibility);
        }
    }

    useEffect(() => {
        showButtonHandler()
        confirmShowButtonHandler()
    }, []);


    // END

    return (
        <div className="w-full flex flex-col mt-4">
            <div className="flex flex-row items-center mb-2">
                <p className="text-[black] text-sm">{inputLabel}</p>
                {errors?.[name] && (<p className="text-[red] text-base font-bold ml-2">*</p>)}
            </div>
            <div className="w-full h-14 border rounded-[10px] flex justify-start items-center shadow-sm">
                <span className="icon ml-4">{InputIcon}</span>
                <div className="h-4/6 border border-[0.8px] ml-4"></div>
                <input type={type} value={value} onChange={handleChange} name={name} placeholder={placeHolder} className="p-4 w-full bg-transparent outline-none text-[black]" />

                {/* Show/Hide */}
                {show && (<button onClick={() => { showHandler(); showButtonHandler(); }} className="mr-5">{iconVisibility ? <Eyeoff /> : <Eye />}</button>)}
                {confirmShow && (<button onClick={() => { confirmShowHandler(); confirmShowButtonHandler(); }} className="mr-5">{confirmIconVisibility ? <Eyeoff /> : <Eye />}</button>)}
                {/* END */}

            </div>
            {
                errors?.[name] && errors[name].length > 0 && (
                    <p className="text-[red] text-xs mt-2">{errors[name]}</p>
                )
            }
        </div >
    );
};

export default Input;
