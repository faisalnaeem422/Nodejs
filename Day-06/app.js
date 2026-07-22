// Event-Driven Architecture & EventEmitter

const ev = require("events");

const emitter = new ev();

// emitter.on("greet",()=>{
//     console.log("Greetings! Welcome to Node js");
// });

// emitter.on("login", () => {
//     console.log("Send Email")
// });

// emitter.on("login",()=>{
//     console.log("Update Database");
// });

// emitter.on("login",()=>{
//     console.log("Create a log");
// })

//Passing data with the events

// emitter.on("Welcome",(name)=>{
//     console.log(`Welcome ${name}`)
// })

// emitter.on("sum", (a, b) => {
//     console.log(`Sum is`, a + b);
// })

// Mini Project: User Registration

// emitter.on("register",(user)=>{
//     console.log(`Welcome ${user}`);
// });

// emitter.on("register",()=>{
//     console.log("Creating Profile...");
// })

// emitter.on("register",()=>{
// console.log("Sending Welcome Email...");
// })

// emitter.on("register",()=>{
//     console.log("Logging Activity...")
// })

// Create a Bank Account event system.

// emitter.on("deposit",(amount)=>{
//     console.log(`Deposited ${amount}`)
// });

// emitter.on("deposit",()=>{
//     console.log("Balance IUpdated");
// })
// emitter.on("deposit",()=>{
//     console.log("Transaction saved")
// });
// emitter.on("deposit",()=>{
// console.log("SNS Sent")
// })

//withdraw balance

emitter.on("withdraw",(amount)=>{
    console.log(`Withdrawn ${amount}`)
});

emitter.on("withdraw",()=>{
    console.log("Balance Updated")
});

emitter.on("withdraw",()=>{
    console.log("Transaction Saved")
});

emitter.on("withdraw",()=>{
    console.log("SMS sent")
})

emitter.emit("withdraw","3500")