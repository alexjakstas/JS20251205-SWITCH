// 3. Month Days
// Task: Write a function that takes a month number (1–12) and returns the number of days in that month. Use a switch with grouped cases (28/29 not required to differentiate).



function hasDaysPerMonth(month){

    let hasDays;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:

            hasDays = 31; 
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            hasDays = 30; 
            break;
        case 2:
            hasDays = 28; 
            break;
        default:
            return `incorrect month "${month}".`;
}
return hasDays
}

console.log(hasDaysPerMonth(1));
console.log(hasDaysPerMonth(2));
console.log(hasDaysPerMonth(4));