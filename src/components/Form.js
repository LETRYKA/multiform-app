"use client";

import Image from "next/image";
import { useState } from "react";
import StepFirst from "@/components/stepFirst"
import StepSecond from "@/components/stepSecond"
import StepThird from "@/components/stepThird"
import Success from "@/components/Success"

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
        date: "",
    })

    const Step = [StepFirst, StepSecond, StepThird, Success][stepState];

    const stepBack = () => {
        if (stepState !== 3) {
            setStepState((prevStep) => (prevStep + 1))
        }
    }

    const stepNext = () => {
        if (stepState !== 0) {
            setStepState((prevStep) => (prevStep - 1))
        }
    }

    console.log(inputValue)
    console.log(stepState)

    return (
        <div className="w-screen h-screen bg-[#F9F7F7] p-2 flex justify-between gap-2">
            <div className="bg-slate-900 w-full h-full rounded-[20px] border">
            </div>
            <div className="bg-[#F9F7F7] w-full h-full rounded-[20px] border flex justify-center items-center flex-col">
                <Step stepBack={stepBack} stepNext={stepNext} SetInputValue={setInputValue} />
            </div>
        </div>

    )
}


export default Form;