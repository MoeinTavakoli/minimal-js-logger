// import library 
const Logger = require('./logger')

// create instance from this and pass the directory to save the log files.
const loggerInstance = new Logger({ path: "./logs" })

// sample log with notice severity
loggerInstance.write('Logger started !', 'notice')

// sample log with info severity
loggerInstance.write('req.body : {username: "moein" , route : "/api/v1/information" }', 'info')

// sample log with error severity
loggerInstance.write('error : {message:"table in database not found"}', 'error')

// sample log with critical severity
loggerInstance.write('error : {message:"service postgres is not active"}', 'critical')