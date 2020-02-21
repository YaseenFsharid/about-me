'use strict';
function guessGame() {
    var name = prompt("please enter your name");
    alert("hello " + name + " please answer with yes or no or y/n");
    var name2 = prompt("is my name yaseen sharid ?");

    var rightAnswer = 0;

    switch (name2.toUpperCase) {
        case 'YES':
            alert("this is a right answer" + name2);
            rightAnswer += 1;
            break;
        case 'Y':
            alert("this is a right answer" + name2);
            rightAnswer += 1;
            break;
        case 'NO':
            alert("this is a wrong answer "+name2);
            break;
        case 'N':
            alert("this is a wrong answer "+name2);
            break;
    }
    document.getElementById("1").innerHTML = "your first answer is : "+ name2;
    var career = prompt("did i study in hashemite unevirsty ?");
    switch (career.toLowerCase()) {
        case 'yes':
            alert("this is a right answer" +career);
            rightAnswer += 1;
            break;
        case 'y':
            alert("this is a right answer" +career);
            rightAnswer += 1;
            break;
        case 'no':
            alert("this is a wrong answer "+career);
            break;
        case 'n':
            alert("this is a wrong answer "+career);
            break;
    }
    document.getElementById("2").innerHTML = "your seconed answer is : "+ career;
    var paint = prompt("did i painting the names with thier stories ?");
    switch (paint.toLowerCase()) {
        case 'yes':
            alert("this is a right answer" +paint);
            rightAnswer += 1;
            break;
        case 'y':
            rightAnswer += 1;
            alert("this is a right answer" +paint);
            break;
        case 'no':
            alert("this is a wrong answer "+paint);
            break;
        case 'n':
            alert("this is a wrong answer "+paint);
            break;
    }
    document.getElementById("3").innerHTML = "your third answer is : "+ paint;
    var hardwork = prompt("do i had an experiance of constructing and painting wall");

    switch (hardwork.toLowerCase()) {
        case 'yes':
            alert("this is a right answer" +hardwork);
            rightAnswer += 1;
            break;
        case 'y':
            alert("this is a right answer" +hardwork);
            rightAnswer += 1;
            break;
        case 'no':
            alert("this is a wrong answer "+hardwork);
            break;
        case 'n':
            alert("this is a wrong answer "+hardwork);
            break;
    }
    document.getElementById("4").innerHTML = "your forth answer is : "+ hardwork;
    var run = prompt("do i like to run daily morning?");
    switch (run.toLowerCase()) {
        case 'yes':
            alert("this is a right answer" +run);
            rightAnswer += 1;
            break;
        case 'y':
            alert("this is a right answer" +run);
            rightAnswer += 1;
            break;
        case 'no':
            alert("this is a wrong answer "+run);
            break;
        case 'n':
            alert("this is a wrong answer "+run);
            break;
    }
    document.getElementById("5").innerHTML = "your fifth answer is : "+ run;
    alert("welcom " + name + "thanks for doing that");

    
    var numOFAttemps = 0;
    var myNum = 3;
    var num = Number(prompt("please enter a number between 0 and 5"));
    var counter = 0;
    while (numOFAttemps < 4) {
        if (num == myNum) {
            alert("awsome you guess my number");
            var ans =num;
            rightAnswer += 1;
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
    document.getElementById("6").innerHTML = "your sexth answer is : "+ "this is a right answer" + ans;
    
    var smokings = ["winston", "marlboro", "kent", "gelouas", "captin black", "lm", "lm loft", "Ld", "kent advance", "marlboro touch"];
    

    var attemps = 0;

    for (var i = 0; i < 6; i++) {
        var gsSmoke = prompt("can you guess what kind of smoking i smoke ?");
        for (var j = 0; j < smokings.length; j++) {
            if (gsSmoke == smokings[j]) {
              alert("awsome you've guess my smoking");
              var sm = gsSmoke;
              document.getElementById("7").innerHTML = "your seventh answer is : "+ "this is a right answer" + sm;  
              rightAnswer += 1;
              
              attemps += 1;
              document.getElementById("8").innerHTML="Your score is : " + rightAnswer; 
              break;


            }

        }
        if (attemps == 1) {
            break;
        }

    }
    
    return alert("your score is :" + rightAnswer + " good job .");
     

 
}

guessGame();








