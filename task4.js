// 4. Grade to Description
// Task: Given a letter grade ("A", "B", "C", "D", "F"), return a description: A → "Excellent", B → "Good", C → "Average", D → "Poor", F → "Fail". Handle lowercase letters too.

function describeGrade(letterGrade){

    let gradeLeter;
switch (letterGrade) {
        case 'A':
            case 'a':
            gradeLeter = "Excellent"; 
            break;
        case 'B':
            case 'b':
            gradeLeter = "Good";
            break;
        case 'C':
            case 'c':
            gradeLeter = "Average";
            break;
        case 'D':
            case 'd':
            gradeLeter = "Poor";
            break;
        case 'F':
            case 'f':
            gradeLeter = "Fail";
            break;
        
        default:
            return `incorrect Grade letter "${letterGrade}".`;
    }
return gradeLeter;
}

console.log(describeGrade('A'));
console.log(describeGrade('c'));
console.log(describeGrade('F'));

