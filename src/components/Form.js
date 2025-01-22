"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react"
import StepFirst from "@/components/stepFirst"
import StepSecond from "@/components/stepSecond"
import StepThird from "@/components/stepThird"
import Success from "@/components/Success"

import StepCard from "@/components/Step"

const Form = (props) => {
    const { } = props;
    const [stepState, setStepState] = useState(0);
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dateBirth: "",
        profileImg: "",
    })
    const [formError, setFormError] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        dateBirth: "",
        profileImg: "",
    })

    const Step = [StepFirst, StepSecond, StepThird, Success][stepState];

    const handleError = (errors) => {
        setFormError((prev) => ({ ...prev, ...errors }));
    }

    const clearError = (fieldName) => {
        setFormError((prev) => ({ ...prev, [fieldName]: "" }));
    }

    const stepBack = () => {
        if (stepState !== 3) {
            setStepState((prevStep) => (prevStep + 1))
        }
    }

    const stepNext = () => {
        if (stepState < 3) {
            setStepState((prevStep) => (prevStep + 1));
        }
    }

    console.log(inputValue)


    return (
        <div className="w-screen h-screen bg-[#F9F7F7] p-2 flex justify-between gap-2">
            <div className="rightSide bg-[url('/imgs/bg.png')] bg-center bg-cover w-full h-full rounded-[20px] flex justify-center items-center relative">
                <div className="absolute bottom-16 flex flex-col gap-4">
                    <StepCard stepNum={'1'} stepDesc={'Setup name, username'} priColor={'white'} secColor={'black'} thirdColor={'black'} />
                    <StepCard stepNum={'2'} stepDesc={'Setup, personal informations'} priColor={'#232323'} secColor={'#454545'} thirdColor={'#c1c1c1'} />
                    <StepCard stepNum={'3'} stepDesc={'Setup date, profile'} priColor={'#232323'} secColor={'#454545'} thirdColor={'#c1c1c1'} />
                </div>
            </div>
            <div className="bg-[#F9F7F7] w-full h-full rounded-[20px] border flex justify-center items-center flex-col">
                <Step stepBack={stepBack} stepNext={stepNext} setInputValue={setInputValue} inputValue={inputValue} errors={formError} handleError={handleError} clearError={clearError} />
            </div>
        </div>

    )
}


export default Form;