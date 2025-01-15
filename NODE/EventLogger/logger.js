const fs = require("fs");
const os = require("os");

const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    this.emit("message", { message });
  }
}

const logger = new Logger();
const logFile = "./eventlog.txt";

// creating a method responsible for grabbing the data
// if i go and pass an event to it , this should be able to write down the event into a log file
// we are going to craft a log message , then we will throw the log mesgae to the file itself

const logToFile = (event) => {
  const logMessage = `${new Date().toISOString()} - ${event.message}`;
  // i have the messgae , now i need to access the file and write the message to the file
  fs.appendFileSync(logFile, logMessage);
};

// below is the event i am listening to and after that i am going to pass the event to the logToFile method
logger.on("message", logToFile);

/*
1. After certain interval i want to calculate somethig from OS and I want to launch my event i.e., 
 log(message) {
    this.emit("message", { message });
2. i want to get some resource , calculate that and launch the event.


*/
setInterval(() => {
  const memoryUsage = (os.freemem() / os.totalmem()) * 100;

  // Now we will recive the event
  logger.log(`Memory usage is at ${memoryUsage}% \n`);
}, 3000);
logger.log("Application started");
logger.log("Application event occured");
