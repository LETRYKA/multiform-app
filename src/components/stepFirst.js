import { useState, useEffect } from "react";
import Input from "@/components/Input"
import Button from "@/components/Button"
import User from "@/icons/user"
import Username from "@/icons/username";

import { isStepOneValid } from '@/utils/StepOneValid'

const StepFirst = (props) => {
    const { stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;
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
            <h1 className="text-[black] font-semibold text-3xl mt-8">Join Us!</h1>
            <p className="text-[grey] font-regular text-base mt-1">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4 mt-6">
                <Input
                    inputLabel={"First Name"}
                    showHandler={showHandler}
                    confirmShowHandler={confirmShowHandler}
                    InputIcon={<User />}
                    placeHolder={"eg. John"}
                    value={inputValue.firstName}
                    name="firstName"
                    handleChange={handleChange}
                    errors={errors}
                    type={"text"} />
                <Input
                    inputLabel={"Last Name"}
                    showHandler={showHandler}
                    InputIcon={<User />}
                    placeHolder={"eg. Sheila"}
                    value={inputValue.lastName}
                    name="lastName"
                    handleChange={handleChange}
                    errors={errors}
                    type={"text"} />
            </div>
            <Input
                inputLabel={"Username"}
                showHandler={showHandler}
                confirmShowHandler={confirmShowHandler}
                InputIcon={<Username />}
                placeHolder={"eg. Darth Vader"}
                value={inputValue.userName}
                name="userName"
                handleChange={handleChange}
                errors={errors}
                type={"text"} />
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepFirst;
