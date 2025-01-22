import { useState } from "react";
import Image from "next/image";
import Input from "@/components/Input"
import Button from "@/components/Button"

import { isStepOneValid } from '@/utils/StepOneValid'

const StepFirst = (props) => {
    const { stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;

    const error = false;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value,
        }));
        clearError(name);
    };

    const handleFormNextStep = () => {
        const { isValid, errors } = isStepOneValid(inputValue);
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


    return (
        <div className="w-[550px] flex flex-col justify-center items-center">
            <img src="/imgs/logo.png" alt="" width={60} height={60} />
            <h1 className="text-[black] font-semibold text-3xl mt-8">Join Us!</h1>
            <p className="text-[grey] font-regular text-base">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4 mt-6">
                <Input
                    inputLabel={"First Name"}
                    inputIcon={"/imgs/user.svg"}
                    placeHolder={"eg. John"}
                    value={inputValue.firstName}
                    name="firstName"
                    handleChange={handleChange}
                    errors={errors} />
                <Input
                    inputLabel={"Last Name"}
                    inputIcon={"/imgs/user.svg"}
                    placeHolder={"eg. Carl"}
                    value={inputValue.lastName}
                    name="lastName"
                    handleChange={handleChange}
                    errors={errors} />
            </div>
            <Input
                inputLabel={"Username"}
                inputIcon={"/imgs/user.svg"}
                placeHolder={"eg. Carl"}
                value={inputValue.userName}
                name="userName"
                handleChange={handleChange}
                errors={errors} />
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepFirst;
