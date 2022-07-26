//Classes
class User{
    constructor (inputDom, chatId){
        this.inputDom = document.getElementById(inputDom);
    }

    say = function(){
        send += 1;
        sendP = send - 1;

        return `Sended ${send} msg;`;
    }
}
let user = new User("in", "chat");

class Robot{
    constructor (name, result){
        this.name = name;
        this.result = result;
    }

    talk(){
        if (send > sendP){
            console.log("I coooome");

            if (user.inputDom.value == "صباح الخير"||user.inputDom.value == "صباح النور"){
                this.result = "صباح الجمال";
            }
            else{

                switch (user.inputDom.value) {
                    case "hi":
                        this.result = "hello";
                        break;
                    case "hello":
                        this.result = "hi";
                        break;
                    case "السلام عليكم":
                        this.result = "وعليكم السلام";
                        break;
                    case "time":
                        console.log("ttttime");

                        this.result = 'Here is the time for you!!';

                        alert(new Date());

                        break;
                    case "weather":
                        console.log("weeeeather");

                        this.result = "Here you are";
                        window.open("https://www.google.com/search?q=الطقس في القاهرة")

                        break;
                    case "calc":
                        console.log("calculator");

                        this.result = "Hi mr.smart!"
                        window.open("https://mohamedhossamwebdev22.github.io/calculator-website/")

                        break;
                    case "music":
                        console.log("music");

                        this.result = "Here you are!"

                        window.open("https://www.youtube.com/search?q=music")

                        break;
                    default:
                        window.open("https://www.google.com/search?q="+user.inputDom.value);
                        break;
                }
            }
        }
    }
}
let hassan = new Robot("حسن");


//Code
var send = 0,
sendP = 0;

document.getElementById("name").innerHTML = hassan.name;

alert("حسن،\nمساعدك الشخصي الآلي،\nجرب كتابة:-\n-time\n-weather\n-music\n-calc");


//get elment.
let btn =document.getElementById("botn"),
clearBtn = document.getElementById("btn"),
chat = document.getElementById("chat");


//Events.
btn.onclick = function () {
    console.log(user.say());
    console.log(hassan.talk());

    chat.innerHTML += 
    `<div class="FromMe">
    <p>${user.inputDom.value}</p>
    </div>
    <div class="FromAI">
    <p>${hassan.result}</p>
    </div>`;
}

clearBtn.onclick = function (){
    chat.innerHTML = '';
    user.inputDom.value = '';
}