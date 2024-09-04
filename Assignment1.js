const calculate = (a, b, c) => {
    if(typeof a!== 'number' || typeof b !== 'number' || a === null || b === null || a === undefined|| b === undefined)
        return "Invalid input number"
    switch(c){
        case 'add':
            return(a+b)
        case 'subtract':
            return(a-b)
        case 'multiply':
            return(a*b)
        case 'divide':
            if (b===0){
                return "Math Error"
            }
            return(a/b)
        default:
            return ('Operation does not exist')
    }
}

let h = calculate(5, 5, 'multiply')
console.log(h)