import Input from "@/components/Input"
import Button from "@/components/Button"

import Email from "@/icons/email";
import Phone from "@/icons/phone";
import Lock from "@/icons/lock";
import Check from "@/icons/check";
import Close from "@/icons/close";

import { useState, useEffect } from "react";
import { isStepTwoValid } from '@/utils/StepTwoValid';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

const StepSecond = (props) => {
    const { stepBack, stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;
    const [show, setShow] = useState();
    const [confirmShow, setConfirmShow] = useState();
    const [isCharValid, setIsCharValid] = useState(false);
    const [isSpecialValid, setIsSpecialValid] = useState(false);
    const [isNumValid, setIsNumValid] = useState(false);
    const [isCapitalValid, setIsCapitalValid] = useState(false)
    const [phone, setPhone] = useState()
    const error = false;

    const MIN_LENGTH_PATTERN = /^.{8,}$/;
    const SPECIAL_CHAR_PATTERN = /[!@#$%^&*(),.?":{}|<>]/;
    const NUMBER_PATTERN = /\d/;
    const UPPERCASE_PATTERN = /[A-Z]/;

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

    const PasswordValidCheck = () => {
        if (MIN_LENGTH_PATTERN.test(inputValue.password)) {
            setIsCharValid(true)
        } else {
            setIsCharValid(false)
        }
        if (SPECIAL_CHAR_PATTERN.test(inputValue.password)) {
            setIsSpecialValid(true)
        } else {
            setIsSpecialValid(false)
        }
        if (NUMBER_PATTERN.test(inputValue.password)) {
            setIsNumValid(true)
        } else {
            setIsNumValid(false)
        }
        if (UPPERCASE_PATTERN.test(inputValue.password)) {
            setIsCapitalValid(true)
        } else {
            setIsCapitalValid(false)
        }
    }

    useEffect(() => {
        PasswordValidCheck();
    }, [handleChange]);

    // Password Show/Hide
    const showHandler = () => {
        setShow(!show)
    }
    const confirmShowHandler = () => {
        setConfirmShow(!confirmShow)
    }

    const animationVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };

    console.log(phone)

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
                <div className="w-full flex flex-col mt-4">
                    <div className="flex flex-row items-center mb-2">
                        <p className="text-[black] text-sm">Phone Number</p>
                        {errors?.phoneNumber && (<p className="text-[red] text-base font-bold ml-2">*</p>)}
                    </div>
                    <div className="w-full h-14 border rounded-[10px] flex justify-start items-center shadow-sm">
                        <PhoneInput defaultCountry="mn" type="text" value={inputValue.phoneNumber} onChange={(value, countryData) => { handleChange({ target: { name: "phoneNumber", value: value, }, }) }} name="phoneNumber" maxLength="30" placeholder="eg. +976 9999-9999" style={{ backgroundColor: 'transparent', }} className="p-4" />
                    </div>
                    {errors?.phoneNumber && errors.phoneNumber.length > 0 && (<p className="text-[red] text-xs mt-2">{errors.phoneNumber}</p>)}
                </div>
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
            <div className="w-full">
                {inputValue.password.length > 0 && (
                    <AnimatePresence mode="wait">
                        <motion.div
                            initial="enter"
                            animate="center"
                            exit="exit"
                            variants={animationVariants}
                            transition={{ duration: 0.4 }}>
                            <div className="w-full h-auto border rounded-[14px] mt-4">
                                <div className="p-5 flex flex-col gap-1">
                                    <h1 className="text-[black] font-semibold text-base mb-2">Your password must contain:</h1>
                                    <p className="text-[grey] font-regular text-sm mt-1 flex flex-row items-center">{isCharValid ? <Check className="mr-2" /> : <Close className="mr-2" />}At least 8 characters</p>
                                    <p className="text-[grey] font-regular text-sm mt-1 flex flex-row items-center">{isSpecialValid ? <Check className="mr-2" /> : <Close className="mr-2" />}At least 1 special character</p>
                                    <p className="text-[grey] font-regular text-sm mt-1 flex flex-row items-center">{isNumValid ? <Check className="mr-2" /> : <Close className="mr-2" />}At least one number</p>
                                    <p className="text-[grey] font-regular text-sm mt-1 flex flex-row items-center">{isCapitalValid ? <Check className="mr-2" /> : <Close className="mr-2" />}At least capital number</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                )}
            </div>
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