export const genCode = ()=>{
    let str = "qwertyuioplkjhgfdsazxcvbnm1234567890QWERTYUIOPLKJHGFDSAZXCVBNM"

    let code = ""

    for(let i = 0; i<6; i++){
        code += str.charAt(Math.floor(Math.random() * str.length))
    }

    return code;
}

// console.log(genCode())