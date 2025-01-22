

// export default function Validation(inputValue) {
//     const errors = {}
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
//     const phonePattern = /^\+?\d{8}$/;

//     if (inputValue.firstName === "") {
//         errors.firstName = "Нэрээ оруулна уу!";
//     }

//     if (inputValue.lastName === "") {
//         errors.lastName = "Овгоо оруулна уу!";
//     }

//     if (!emailPattern.test(inputValue.email)) {
//         errors.email = "Зөв мэйл хаяг оруулна уу!";
//     }

//     if (!passwordPattern.test(inputValue.password)) {
//         errors.password = "6 оронтой тоо оруулна уу";
//     }

//     if (!phonePattern.test(inputValue.phoneNumber)) {
//         errors.phoneNumber = "8 оронтой дугаар оруулна уу!";
//     }

//     return errors;
// }

export const isStepOneValid = (data) => {
    console.log('test');
    const { firstName, lastName, userName} = data;
    const errors = {};
    let isValid = true;

    // Validate firstName
    if (firstName.length <= 1) {
        errors.firstName = "Please enter your First Name";
        isValid = false;
    }

    // Validate lastName
    if (lastName.length <= 1) {
        errors.lastName = "Please enter your Last Name";
        isValid = false;
    }

     // Validate lastName
     if (userName.length <= 1) {
        errors.userName = "Please enter your Username";
        isValid = false;
    }

    console.log(isValid, errors);

    return { isValid, errors };
};
