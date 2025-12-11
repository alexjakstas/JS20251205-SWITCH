// 1. Days Until Weekend
// Task: Write a function daysUntilWeekend(day) that takes a weekday name and returns how many days are left until Saturday. Use a switch to convert the day name to a number.

let day;
let dayNumber = new Date().getDay();

function daysUntilWeekend(day){

    let daysToSaturday;

    switch (day) {
        case 1:
            daysToSaturday = 5; 
            break;
        case 2:
            daysToSaturday = 4;
            break;
        case 3:
            daysToSaturday = 3;
            break;
        case 4:
            daysToSaturday = 2;
            break;
        case 5:
            daysToSaturday = 1;
            break;
        case 6:
            daysToSaturday = 0; 
            break;
        case 0:
            daysToSaturday = 6; 
            break;
        default:
            return `incorrect day "${day}".`;
    }

    return daysToSaturday;
}
console.log(`till Saturday left: ${daysUntilWeekend(dayNumber)} days`)

