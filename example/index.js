const project = {
    name: 'DSR',
    launch() {
        console.log(this);
    }
}

// project.launch();

const launch = project.launch.bind(project);
// launch();
// const square = function(number){
//     return number * number;
// }

const square = number => number * number;
// console.log(square(102));

const projects = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
]

const projectList = {
    name: 'DSR',
    version: '2.0',
    env: 'PHP',
    framework: 'Laravel 9'
}
const {name, framework: fr} = projectList;
// console.log(fr);

const first = [1, 2, 3];
const second = [4, 5, 6];
const combined1 = first.concat(second);
const combined2 = [...first,'a', ...second];
// console.log(combined2);

const obj1 = { name: "Mehedi" };
const obj2 = { job: "Jr. System Analyst" };

const combinedObject = {...obj1, ...obj2, Location:'ISA'};
console.log(combinedObject);

// const activeProjects = projects.filter(function(project) {
//     return project.isActive;
// })

const activeProjects = projects.filter(project => project.isActive);

// console.log(activeProjects);

const person = {
    talk(){
        console.log("this", this);
    }
};
person.talk();

var users = ["User 1","User 2"];
const list = users.map(name=> `<li>${name}</li>`);
console.log(list);



function addUser(username, callback){
    setTimeout(()=>{
        users.push(username);
        callback();
    }, 100);
}



function getUsers(){
    setTimeout(()=>{
        console.log(users);
    }, 90);
}
// addUser("User 3", getUsers);

// getUsers();