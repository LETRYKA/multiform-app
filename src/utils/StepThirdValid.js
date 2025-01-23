

export const isStepThirdValid = (data) => {

    const { dateBirth, profileImg } = data;
    const errors = {};
    let isValid = true;

    // Validate Email
    if (dateBirth === "") {
        errors.dateBirth = "Please enter your Date of Birth!";
        isValid = false;
    }

    if (profileImg === "") {
        errors.profileImg = "Test"
        isValid = false;
    }


    console.log(isValid, errors);

    return { isValid, errors };
};
