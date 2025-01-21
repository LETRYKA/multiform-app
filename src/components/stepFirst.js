import Image from "next/image";
import Input from "@/components/Input"

const StepFirst = (props) => {
    const { stepBack, stepNext, setInputValue } = props;

    const errorHandler = () => {
        if (value.length === 0) {

        }
    }

    return (
        <div className="w-[500px] flex flex-col justify-center items-center">
            <img src="/imgs/logo.png" alt="" width={60} height={60} />
            <h1 className="text-[black] font-semibold text-3xl mt-8">Join Us!</h1>
            <p className="text-[grey] font-regular text-base">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4">
                <Input inputLabel={'First Name'} inputIcon={'/imgs/lock.svg'} placeHolder={'eg. John'} error={errorHandler} errorMessage={'Нэрээ оруулна уу!'} />
            </div>
        </div>
    )
}


export default StepFirst;