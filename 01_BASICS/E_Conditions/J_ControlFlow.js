/*
* Control Flow :
- if, else if, else, switch-case, early return pattern.

* if else, else if
if(loggedIn) {
} else {
}

if(loggedIn && admin) {
} else if(loggedIn) {
} else {
}

* Switch statements :
switch(val) {
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    default:
}

* Early return pattern :
function getVal(val) {
    if(val < 100) return "A";
    else if(val < 50) return "C";
    else return "D";
}

getVal(89);
*/

function getGrade(score) {
    if(score >= 90 && score <= 100) {
        return "A";
    } else if(score >= 80 && score <= 89){
        return "B";
    } else if(score >= 70 && score <= 79){
        return "C";
    } else if(score >= 60 && score <=69){
        return "D";
    } else{
        return "F";
    }
}

console.log("Grade :", getGrade(95));

// The above can be written with early return pattern

function getGradeScore(score) {
    if(score >= 90 && score <= 100) return "A";
    else if(score >= 80 && score <= 89) return "B";
    else if(score >= 70 && score <= 79) return "C";
    else if(score >= 60 && score <=69) return "D";
    else return "F";
}

console.log("Grade of :", getGradeScore(40));