// 10. Currency Symbol Finder
// Task: Create a function that receives a currency code ("USD", "EUR", "GBP", "JPY", "CHF") and returns its symbol ("$", "€", "£", "¥", "Fr"). Use fallback for unsupported codes.

function showCurencySymbol(curency){

    let type;

    switch (curency) {
        case 'USD':
            type = "$"; 
            break;
            
        case 'EUR':
            type = "€"; 
            break;

        case 'JPY':
            type = "¥"; 
            break;

        case 'CHF':
            type = "Fr"; 
            break;

        case 'GBP':
            type = "£"; 
            break;
      
        default:
            return `unknown currency ${curency}`;
}
return type;
}

console.log(showCurencySymbol('USD'));
console.log(showCurencySymbol('JPY'));
console.log(showCurencySymbol('CHF'));
console.log(showCurencySymbol('LTL'));