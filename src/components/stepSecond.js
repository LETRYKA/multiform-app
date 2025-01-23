import Input from "@/components/Input"
import Button from "@/components/Button"

import Email from "@/icons/email";
import Phone from "@/icons/phone";
import Lock from "@/icons/lock";

import { useState, useEffect } from "react";
import { isStepTwoValid } from '@/utils/StepTwoValid';

const StepSecond = (props) => {
    const { stepBack, stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;
    const [show, setShow] = useState();
    const [confirmShow, setConfirmShow] = useState();
    const error = false;

    // Get Value
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
        const { isValid, errors } = isStepTwoValid(inputValue);
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
        setConfirmShow(!confirmShow)
    }



    return (
        <div className="w-[550px] flex flex-col justify-center items-center">
            <img src="/imgs/logo.png" alt="" width={60} height={60} />
            <h1 className="text-[black] font-semibold text-3xl mt-8">Step 2</h1>
            <p className="text-[grey] font-regular text-base mt-1">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4 mt-6">
                <Input
                    inputLabel={"Email"}
                    showHandler={showHandler}
                    confirmShowHandler={confirmShowHandler}
                    InputIcon={<Email />}
                    placeHolder={"eg. your@mail.com"}
                    value={inputValue.email}
                    name="email"
                    handleChange={handleChange}
                    errors={errors}
                    type={"text"} />
                <Input
                    inputLabel={"Phone Number"}
                    showHandler={showHandler}
                    confirmShowHandler={confirmShowHandler}
                    InputIcon={<Phone />}
                    placeHolder={"eg. 9999-9999"}
                    value={inputValue.phoneNumber}
                    name="phoneNumber"
                    handleChange={handleChange}
                    errors={errors}
                    type={"text"} />
            </div>
            <Input
                inputLabel={"Password"}
                showHandler={showHandler}
                confirmShowHandler={confirmShowHandler}
                InputIcon={<Lock />}
                placeHolder={"Enter your password"}
                value={inputValue.password}
                name="password"
                handleChange={handleChange}
                errors={errors}
                type={show ? "text" : "password"} />
            <Input
                inputLabel={"Confirm Password"}
                showHandler={showHandler}
                confirmShowHandler={confirmShowHandler}
                InputIcon={<Lock />}
                placeHolder={"Confirm your password"}
                value={inputValue.confirmPassword}
                name="confirmPassword"
                handleChange={handleChange}
                errors={errors}
                type={confirmShow ? "text" : "password"} />
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button step={stepBack} btnLabel={'Back'} priColor={'white'} secColor={'black'} handleFormNextStep={stepBack} />
                <Button step={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepSecond;