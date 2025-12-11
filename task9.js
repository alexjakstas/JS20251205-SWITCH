// 9. Pokémon Type Advantage
// Task: Write a function typeAdvantage(type) returning its strength:

// "fire" → "grass"
// "water" → "fire"
// "grass" → "water" If unknown type → "No advantage".

function typeAdvantage(type){

    let command;

    switch (type) {
        case 'fire':
            command = "grass"; 
            break;
        case 'water':
            command = "fire"; 
            break;
        case 'grass':
            command = "water"; 
            break;
      
        default:
            return `No advantage.`;
}
return command;
}

console.log(typeAdvantage('fire'));