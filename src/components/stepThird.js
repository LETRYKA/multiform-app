import Input from "@/components/Input"
import Button from "@/components/Button"
import Lock from "@/icons/lock";
import { isStepThirdValid } from '@/utils/StepThirdValid'

import User from "@/icons/user";
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
                    inputLabel={"Email"}
                    confirmShowHandler={confirmShowHandler}
                    showHandler={showHandler}
                    InputIcon={<User />}
                    placeHolder={"eg. your@mail.com"}
                    value={inputValue.email}
                    name="email"
                    handleChange={handleChange}
                    errors={errors}
                    type={"text"} />
            </div>
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button step={stepBack} btnLabel={'Back'} priColor={'white'} secColor={'black'} handleFormNextStep={stepBack} />
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepThird;