"use client";

import { useEffect, useState } from "react";
import StepFirst from "@/components/stepFirst"
import StepSecond from "@/components/stepSecond"
import StepThird from "@/components/stepThird"
import Success from "@/components/Success"
import StepCard from "@/components/Step"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"

const Form = (props) => {
    const { } = props;
    const [stepState, setStepState] = useState(0);
    const [stepIndicator, setStepIndicator] = useState({
        cardOne: false,
        cardTwo: false,
        cardThree: false,
    });
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
    });
    const Step = [StepFirst, StepSecond, StepThird, Success][stepState];

    // Error Handler
    const handleError = (errors) => {
        setFormError((prev) => ({ ...prev, ...errors }));
    }

    const clearError = (fieldName) => {
        setFormError((prev) => ({ ...prev, [fieldName]: "" }));
    }

    // State changing Next/Back
    const stepBack = () => {
        if (stepState !== 3) {
            setStepState((prevStep) => (prevStep - 1))
        }
    }

    const stepNext = () => {
        if (stepState < 3) {
            setStepState((prevStep) => (prevStep + 1));
        }
    }

    const stepIndicatorHandler = () => {
        if (stepState === 0) {
            setStepIndicator({
                cardOne: true,
                cardTwo: false,
                cardThree: false,
            });
        }
        if (stepState === 1) {
            setStepIndicator({
                cardOne: true,
                cardTwo: true,
                cardThree: false,
            });
        }
        if (stepState === 2) {
            setStepIndicator({
                cardOne: true,
                cardTwo: true,
                cardThree: true,
            });
        }
    }

    useEffect(() => {
        const data = localStorage.getItem("formData");
    }, []);

    useEffect(() => {
        stepIndicatorHandler();
    }, [stepState]);

    const animationVariants = {
        enter: { opacity: 0, x: 100 },
        center: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    };
    console.log(inputValue)

    return (
        <div className="w-screen h-screen bg-[#F9F7F7] p-2 flex justify-between gap-2">
            <div className="rightSide relative overflow-hidden bg-[url('/imgs/bg.png')] bg-center bg-cover w-full h-full rounded-[20px] flex justify-center items-center">
                <div className="Grain w-full h-full"></div>
                <div className="absolute bottom-16 flex flex-col gap-4">
                    <StepCard stepNum={1} stepDesc={'Setup name, username'} priColor={stepIndicator?.cardOne ? "white" : "#232323"} secColor={stepIndicator?.cardOne ? "black" : "#454545"} thirdColor={stepIndicator?.cardOne ? "black" : "#c1c1c1"} />
                    <StepCard stepNum={2} stepDesc={'Setup privacy forms'} priColor={stepIndicator?.cardTwo ? "white" : "#232323"} secColor={stepIndicator?.cardTwo ? "black" : "#454545"} thirdColor={stepIndicator?.cardTwo ? "black" : "#c1c1c1"} />
                    <StepCard stepNum={3} stepDesc={'Setup profile'} priColor={stepIndicator?.cardThree ? "white" : "#232323"} secColor={stepIndicator?.cardThree ? "black" : "#454545"} thirdColor={stepIndicator?.cardThree ? "black" : "#c1c1c1"} />
                </div>
            </div>

            <div className="bg-[#F9F7F7] w-full h-full rounded-[20px] border flex justify-center items-center flex-col shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={Step}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        variants={animationVariants}
                        transition={{ duration: 0.5 }}>
                        <div>
                            <Step stepBack={stepBack} stepNext={stepNext} setInputValue={setInputValue} inputValue={inputValue} errors={formError} handleError={handleError} clearError={clearError} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>

    )
}


export default Form;
