const { default: mongoose } = require("mongoose");

const dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);

// Monitors for a successful connection through Mongoose
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
});

// Checks for a connection error 
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
})

// Checks for a disconnection event
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
})

// Define a function to accept a message and a callback
const gracefulShutdown = (msg, callback) => {
    // Closes the Mongoose connection, passing through an anonymous 
    // function to run when it,s closed
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// listens to Node process for termination or restart signals and calls the 
// gracefulShutdown function when appropriate, passing a continuation callback
// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon retart', () => {
        process.kill(process.id, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./locations');
