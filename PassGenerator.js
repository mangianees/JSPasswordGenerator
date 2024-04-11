function passwordGenerator(){
    const passwordLength = 12;
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChar = "!$%^&*()@";
    let password = "";
    let passwordAccum = "";
    const isLowerCase = true;
    const isUpperCase = true;
    const isNumbers = true;
    const isSpecialChar = true;

    if(isLowerCase){
        passwordAccum += lowerCase;
    }
    if(isUpperCase){
        passwordAccum += upperCase;
    }
    if(isNumbers){
        passwordAccum += numbers;
    }
    if(isSpecialChar){
        passwordAccum += specialChar;
    }

    for(let i=0;i<passwordLength;i++){
        const index = Math.floor(Math.random() * passwordAccum.length);
        console.log("index = ",index,i);
        password += passwordAccum [index];
        
    }
    console.log("Password generated= ", password);
}