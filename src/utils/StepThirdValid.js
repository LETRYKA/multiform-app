

export const isStepThirdValid = (data) => {

    const { dateBirth, profileImg, file } = data;
    const errors = {};
    let isValid = true;

    // Validate Email
    if (dateBirth === "") {
        errors.dateBirth = "Please enter your Date of Birth!";
        isValid = false;
    }

    // Validate Profilei mg
    if (profileImg === "") {
        errors.profileImg = "Please enter your Profile image!";
        isValid = false;
    }

    return { isValid, errors };
};
