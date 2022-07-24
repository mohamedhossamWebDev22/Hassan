let btn = document.getElementById("btn"),
inp = document.getElementById("in");

class User{
    constructor (){

    }
}

class Robot{
    constructor (name, gendre, robot){
        this.name = name;
        this.gendre = gendre;
        this.robot = robot;

        this.version = 1.0;
    }
}

let user = new User();
let ai = new Robot("hassan", "male", true);

