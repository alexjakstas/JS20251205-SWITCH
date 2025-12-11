// 7. String Command Interpreter
// Task: Create a function runCommand(cmd) that supports commands:

// "start" → return "Starting..."
// "stop" → return "Stopping..."
// "pause" → return "Pausing..."
// "resume" → return "Resuming..." Default: "Unknown command".

function runCommand(cmd){

    let command;

    switch (cmd) {
        case 'start':
            command = "Starting..."; 
            break;
        case 'stop':
            command = "Stopping..."; 
            break;
        case 'pause':
            command = "Pausing..."; 
            break;
        case 'resume':
            command = "Resuming..."; 
            break;
        default:
            return `Unknown command.`;
}
return command;
}

console.log(runCommand('start'));
console.log(runCommand('pause'));
console.log(runCommand('off'));