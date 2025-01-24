import Input from "@/components/Input"
import Button from "@/components/Button"
import Date from "@/icons/date";
import Upload from "@/icons/upload";
import Trash from "@/icons/trash";
import { isStepThirdValid } from '@/utils/StepThirdValid'

import { useState } from "react";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/router-reducer/fetch-server-response";

const StepThird = (props) => {
    const { stepBack, stepNext, setInputValue, inputValue, errors, handleError, clearError } = props;
    const [show, setShow] = useState();
    const [confirmShow, setConfirmShow] = useState();
    const [file, setFile] = useState("");
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

    // Image get
    const handleImageUpload = (event) => {
        const file = event.target.files[0];

        const fileReader = new FileReader();
        fileReader.onload = () => {
            setFile(fileReader.result)
        };

        fileReader.readAsDataURL(file);

        setInputValue((prev) => ({
            ...prev,
            profileImg: file,
        }));
    }

    const fileClear = () => {
        setFile("")
        setInputValue((prev) => ({
            ...prev,
            profileImg: "",
        }));
    }

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

    console.log(inputValue.profileImg)

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
                {!file.length > 0 ? (
                    <div className="flex items-center justify-center w-full mt-3">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-transparent">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <Upload />
                                <p className="mb-2 text-sm text-[black] font-semibold mt-4">Drop your file here, or <span className="text-[#3d4bcb] underline">Browse</span></p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG</p>
                            </div>
                            <input onChange={handleImageUpload} name="profileImg" id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>) : (
                    <div className="w-full h-[256px] border rounded-lg bg-cover bg-center mt-3 relative" style={{ backgroundImage: `url(${file})` }}><button className="w-6 h-6 rounded-[50%] absolute bg-red-700 right-4 top-3 flex justify-center items-center" onClick={fileClear}><Trash /></button></div>)}

                {errors?.profileImg && errors.profileImg.length > 0 && (
                    <p className="text-[red] text-xs mt-2">{errors.profileImg}</p>)}
            </div>
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button step={stepBack} btnLabel={'Back'} priColor={'white'} secColor={'black'} handleFormNextStep={stepBack} />
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} handleFormNextStep={handleFormNextStep} />
            </div>
        </div>
    )
}


export default StepThird;