const fs = require("fs");

var filename_array = []

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}) //took this part from NodeJS official documentation on command line inputs


function execute_user_input (user_input) {
    filename_array.push(user_input);
    fs.writeFile(user_input,"You are awesome",(err)=>{
        if(err) {
            console.log(err);
        } else {
            console.log("\nUpdate: A file named "+user_input+ " has been created\n");
        }
    })
}

function user_continue_prompt() {
        readline.question("Do you want to continue? enter 'yes' or 'no'",res =>{
        if(res == "yes") {
            taking_user_input_recursive();
        } else if (res == "no") {
            console.log("Thanks! Bye");
            process.exit(0);
        } else {
            console.log("Invalid answer");
            user_continue_prompt();
        }
    })
}

function taking_user_input_recursive () {
    readline.question("Please enter a new file name :", (given_name) =>{
        if(filename_array.includes(given_name)) {
            console.log("The given name exists already.");
            taking_user_input_recursive();
        } else {
            execute_user_input(given_name);
            user_continue_prompt();
        }
    })
}

taking_user_input_recursive();