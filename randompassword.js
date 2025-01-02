function generatePassword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols 
) {
    const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars="0123456789"
    const symbolChars="!@#$%^*()?:</>"
    const answer=document.getElementById("answer")

    let allowedChars="";
    let password="";
    allowedChars+=includeLowercase ? lowercaseChars:"";
    allowedChars+=includeUppercase ? UppercaseChars:"";
    allowedChars+=includeNumbers ? numberChars : "";
    allowedChars+=includeSymbols ? symbolChars : "";
    
    if(length<=0){
        return (`password length must be at least 1`);
    }
    if(allowedChars.length === 0){
        return`(password length must be selected)`
    }
    for(let i=0;i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password+=allowedChars[randomIndex];

    }
    answer.textContent=password
    return password
         
    
}

const passwordlength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;


const password=generatePassword(passwordlength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);
console.log(`genertaed password is ${password}`);
