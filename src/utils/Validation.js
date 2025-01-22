


export default function Validation(inputValue) {
    const errors = {}

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    const phonePattern = /^\+?\d{8}$/;

    if (inputValue.firstName === "") {
        errors.firstName = "First name is required";
    }

    if (inputValue.lastName === "") {
        errors.lastName = "Last name is required";
    }

    if (!emailPattern.test(inputValue.email)) {
        errors.email = "Invalid email format";
    }

    if (!passwordPattern.test(inputValue.password)) {
        errors.password = "Password must include at least one uppercase letter, one number, and be 8 characters or longer";
    }

    if (!phonePattern.test(inputValue.phoneNumber)) {
        errors.phoneNumber = "Phone number is invalid";
    }

    return errors;
}
