import Input from "@/components/Input"
import Button from "@/components/Button"
import Date from "@/icons/date";
import Upload from "@/icons/upload";
import { isStepThirdValid } from '@/utils/StepThirdValid'

import { useState } from "react";

const StepThird = (props) => {
    const { stepBack, stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;
    const [show, setShow] = useState();
    const [confirmShow, setConfirmShow] = useState();
    const error = false;

    // Get Input Value
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };

    // Validate Input Value
    const handleFormNextStep = () => {
        const { isValid, errors } = isStepThirdValid(inputValue);
        if (isValid) {
            const localData = {
                ...inputValue,
                stepState: 1,
            };
            localStorage.setItem("formData", JSON.stringify(localData));

            stepNext();
        } else {
            handleError(errors);
        };
    };

    // Password Show/Hide
    const showHandler = () => {
        setShow(!show)
    }
    const confirmShowHandler = () => {
        setConfirmShow(!show)
    }


    return (
        <div className="w-[550px] flex flex-col justify-center items-center">
            <img src="/imgs/logo.png" alt="" width={60} height={60} />
            <h1 className="text-[black] font-semibold text-3xl mt-8">Step 3</h1>
            <p className="text-[grey] font-regular text-base mt-1">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4 mt-6">
                <Input
                    inputLabel={"Date of Birth"}
                    confirmShowHandler={confirmShowHandler}
                    showHandler={showHandler}
                    InputIcon={<Date />}
                    placeHolder={""}
                    value={inputValue.dateBirth}
                    name="dateBirth"
                    handleChange={handleChange}
                    errors={errors}
                    type={"date"} />
            </div>
            <div className="w-full">
                <p className="text-[black] text-sm mt-6">Profile Image</p>
                <div className="flex items-center justify-center w-full mt-3">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload />
                            <p className="mb-2 text-sm text-[black] font-semibold mt-4">Drop your file here, or <span className="text-[#3d4bcb] underline">Browse</span></p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                        </div>
                        <input onChange={handleChange} name="profileImg" value={inputValue.profileImg} id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
                {
                    errors.profileImg && errors.profileImg.length > 0 && (
                        <p className="text-[red] text-xs mt-2">{errors[name]}</p>
                    )
                }
            </div>
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button step={stepBack} btnLabel={'Back'} priColor={'white'} secColor={'black'} handleFormNextStep={stepBack} />
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepThird;