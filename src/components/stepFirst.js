import Image from "next/image";
import Input from "@/components/Input"
import Button from "@/components/Button"

const StepFirst = (props) => {
    const { stepBack, stepNext, setInputValue, inputValue } = props;

    const errorHandler = (value) => {
        if (value.length === 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="w-[500px] flex flex-col justify-center items-center">
            <img src="/imgs/logo.png" alt="" width={60} height={60} />
            <h1 className="text-[black] font-semibold text-3xl mt-8">Join Us!</h1>
            <p className="text-[grey] font-regular text-base">Please provide all current information accurately.</p>
            <div className="w-full flex flex-row gap-4">
                <Input
                    inputLabel={"First Name"}
                    inputIcon={"/imgs/lock.svg"}
                    placeHolder={"eg. John"}
                    value={inputValue.firstName}
                    name="firstName"
                    onChange={(name, value) => {
                        setInputValue((prev) => ({ ...prev, [name]: value }));

                    }}
                    error={errorHandler}
                    errorMessage={'Нэрээ оруулна уу!'} />
            </div>
            <div className="w-full flex flex-row gap-4 mt-10">
                <Button stepNext={stepNext} btnLabel={'Next'} priColor={'black'} secColor={'white'} />
            </div>
        </div>
    )
}


export default StepFirst;