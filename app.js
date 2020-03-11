const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const question = require("./lib/question");

const render = require("./lib/htmlRenderer");
start()
function start() {
    inquirer.prompt(question.askManager).then(function (data) {
        menu()
    })
}



function menu() {
    inquirer.prompt(question.typeEmployee).then(function (data) {
        switch(data.choices){
            case "Engineer":
                inquirer.prompt(question.forEngineer).then(function (data) {
                    menu()
                })   
                break;
            case "Intern":
                inquirer.prompt(question.forIntern).then(function (data) {
                    menu()
                })
                break;
            case "Exit":
                console.log("succesfully")
                break;
                
            
        }
    })
}
