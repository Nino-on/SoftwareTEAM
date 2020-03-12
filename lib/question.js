const question = module.exports = {
    
    askManager:[
        {
            type: "input",
            message: "Manager Name:",
            name:"managerName"
        },{
            type: "input",
            message: "What is your ID?",
            name:"createId"
        },{
            type: "input",
            message: "What is your Email?",
            name: "makeEmail"
        },{
            type: "input",
            message: "What is your Office number?",
            name:"officeNumber"
        },
    ],
    forEngineer: [
        {
            type: "input",
            message: "What is the Engineer's Name:",
            name:"engineerName"  
        },{
            type: "input",
            message: "Enter Engineer's ID",
            name:"engineerId"
        },{
            type: "input",
            message: "What is the Engineer's email?",
            name:"engineerEmail"
        },{
            type: "input",
            message: "What is the Engineer's Github",
            name:"engineerGithub"
        }
    ],
    forIntern: [
        {
            type: "input",
            message: "What is the Intern's Name:",
            name:"internName"  
        },{
            type: "input",
            message: "Enter Intern's ID",
            name:"internId"
        },{
            type: "input",
            message: "What is the Intern's email?",
            name:"internEmail"
        },{
            type: "input",
            message: "What is the Intern's school",
            name:"internschool"
        }
    ],
    typeEmployee: [
        {
            type: "list",
            name: "choices",
            message: "What is your role?",
            choices: ["Engineer", "Intern", "Exit"]
        }
    ]
}