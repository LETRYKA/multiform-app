

export const isStepTwoValid = (data) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?\d{8}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    const { email, phoneNumber, password, confirmPassword } = data;
    const errors = {};
    let isValid = true;

    // Validate Email
    if (email === "") {
        errors.email = "Please enter your Email address!";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        errors.email = "Please enter correct Email address!";
        isValid = false;
    }

    // Validate PhoneNumber
    if (phoneNumber === "") {
        errors.phoneNumber = "Please enter your Phone Number!";
        isValid = false;
    } else if (!phonePattern.test(phoneNumber)) {
        errors.phoneNumber = "Please enter correct Phone Number!";
        isValid = false;
    }

    // Validate Password
    if (password === "") {
        errors.password = "Please enter your Password!";
        isValid = false;
    } else if (!passwordPattern.test(password)) {
        errors.password = `Please enter correct Password`;
        isValid = false;
    }

    // Validate confirmPassword
    if (confirmPassword === "") {
        errors.confirmPassword = "Please confirm your Password!";
        isValid = false;
    } else if (confirmPassword !== password) {
        errors.confirmPassword = `Password does not match the password you entered`;
        isValid = false;
    }

    return { isValid, errors };
};
