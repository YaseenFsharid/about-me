'use strict';
function guessGameQ1()
{
var name = prompt("please enter your name");
alert("hello " + name + " please answer with yes or no or y/n");
var name2 = prompt("is my name yaseen sharid ?");
console.log(name2);
var rightAnswer =0;
console.log(name2);
switch (name2.toUpperCase) {
    case 'YES':
        console.log(name2);
        rightAnswer +=1;
    case 'Y':
        console.log(name2);
        rightAnswer +=1;
        break;
    case 'NO':
        console.log(name2);
    case 'N':
        console.log(name2);
        break;
}
}

guessGameQ1();

function guessGameQ2() {

var career = prompt("did i study in hashemite unevirsty ?");
switch (career.toLowerCase()) {
    case 'yes':
        console.log(career);
        rightAnswer +=1;
    case 'y':
        console.log(career);
        rightAnswer +=1;
        break;
    case 'no':
        console.log(career);
    case 'n':
        console.log(career);
        break;
}
}

guessGameQ2();

function guessGameQ3() {
var paint = prompt("did i painting the names with thier stories ?");
switch (paint.toLowerCase()) {
    case 'yes':
        console.log(paint);
        rightAnswer +=1;
    case 'y':
        console.log(paint);
        rightAnswer +=1;
        break;
    case 'no':
        console.log(paint);
    case 'n':
        console.log(paint);
        break;
}
}

guessGameQ3();

function guessGameQ4() {
var hardwork = prompt("do i had an experiance of constructing and painting wall");

switch (hardwork.toLowerCase()) {
    case 'yes':
        console.log(hardwork);
        rightAnswer +=1;
    case 'y':
        console.log(hardwork);
        rightAnswer +=1;
        break;
    case 'no':
        console.log(hardwork);
    case 'n':
        console.log(hardwork);
        break;
}
}
guessGameQ4();

function guessGameQ5() {
var run = prompt("do i like to run daily morning?");
switch (run.toLowerCase()) {
    case 'yes':
        console.log(run);
        rightAnswer +=1;
    case 'y':
        console.log(run);
        rightAnswer +=1;  
        break;
    case 'no':
        console.log(run);
    case 'n':
        console.log(run);
        break;
}
}
alert("welcome " + name + "thanks for doing that"); 

guessGameQ5();


function guessGameQ6() {

var numOFAttemps = 0;
var myNum = 3;
var num = Number(prompt("please enter a number between 0 and 5"));
var counter = 0;
while (numOFAttemps < 4) {
    if (num == myNum) {
        alert("awsome you guess my number");
        rightAnswer +=1;
        break;
    } else if (num < myNum) {
        alert("this is too low please try agian");
        var num = Number(prompt("please enter a number between 0 and 5"));
    } else if (num > myNum) {
        alert("this is too high please try agian");
        var num = Number(prompt("please enter a number between 0 and 5"));
    }

    numOFAttemps++;
    // this if is used to show the right answer to users
    if (numOFAttemps == 4) {
        alert("my number is 3");
    }
}
}

guessGameQ6();

function guessGameQ7() {
var smokings = ["winston", "marlboro", "kent", "gelouas", "captin black", "lm", "lm loft", "Ld", "kent advance", "marlboro touch"];
var mySmoke = smokings[2];
var gsSmoke = prompt("can you guess what kind of smoking i smoke ?");
var attemps = 0;

 while (attemps < 6){
    switch (gsSmoke.toLowerCase()) {
        case smokings[0]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[1]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[2]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[3]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[4]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[5]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[6]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[7]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[8]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
        case smokings[9]:
            alert("awsome you've get my smoking");
            rightAnswer +=1;
            attemps=7;
            break;
         default :
         attemps++ ;
         gsSmoke = prompt("please guess agian");    
    }

}


  return alert("your score is :" + rightAnswer +" good job .");
 
}


guessGameQ7();