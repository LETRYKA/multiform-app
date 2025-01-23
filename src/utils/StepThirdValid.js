

export const isStepThirdValid = (data) => {

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


    console.log(isValid, errors);

    return { isValid, errors };
};
