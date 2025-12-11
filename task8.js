// 8. Season By Temperature Range
// Task: Input: an integer temperature. Use a switch(true) pattern to determine:

// temp < 0 → "Freezing"
// 0–10 → "Cold"
// 11–20 → "Mild"
// 21–30 → "Warm"
// > 30 → "Hot"

function checkTemperature(tempCelsius) {
    let feeling;

    switch (true) {

        case (tempCelsius < 0):
            feeling = "Freezing";
            break;
   
        case (tempCelsius >= 0 && tempCelsius <= 10):
            feeling = "Cold";
            break;
            
        case (tempCelsius >= 11 && tempCelsius <= 20):
            feeling = "Mild";
            break;

        case (tempCelsius >= 21 && tempCelsius <= 30):
            feeling = "Warm";
            break;
        case (tempCelsius > 30):
            feeling = "Hot";
            break;

        default:
            feeling = "not a number";
    }
    
    
    return feeling; 
}

console.log(checkTemperature(-40));
console.log(checkTemperature(15));
console.log(checkTemperature(44));
