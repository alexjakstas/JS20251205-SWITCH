// 5. Traffic Light Behavior Simulator
// Task: Write a function that takes a traffic light color ("red", "yellow", "green") and returns what a driver should do. Use switch and default to "Unknown light".


function simulateBehavior(trafficLight){

    let litghtCollor;
switch (trafficLight) {
        case 'red':
            litghtCollor = "Wait"; 
            break;

        case 'yellow':
            litghtCollor = "Prepare";
            break;

        case 'green':
            litghtCollor = "Go";
            break;
              
        default:
            return `Unknown light.`;
    }
return litghtCollor;
}

console.log(simulateBehavior('red'));
console.log(simulateBehavior('yellow'));
console.log(simulateBehavior('green'));
console.log(simulateBehavior('purple'));