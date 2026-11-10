//Ex1
function challenge1(width, height) {
    let rectangleString = '';
    // Your code
    for(let i = 0; i<height ;i++){
        for(let j = 0; j<width ;j++){
            rectangleString += "*";
        }
        rectangleString+="\n";
    }
    return rectangleString;
}
console.log("EXERCISE-1 Draw a rectangle");
console.log(challenge1(3,4));
console.log(challenge1(5,2));
console.log(challenge1(5,-2));

//Ex2
function reverse(array){
    let reverse = [];
    let j=0;
    for(let i=array.length-1; i>=0; i--){
        reverse[j] = array[i];
        j++;
    }
    return reverse;
}
let arr1=[14,15,16,20];
let arr2=[5,4,3,2,1];
let arr3=[14,15,16,20];
console.log("EXERCISE-2 Reverse an array");
console.log(reverse(arr1));
console.log(reverse(arr2));
console.log(reverse(arr3));

//Ex3
function calArg(array){
    let sum=0;
    if(array.length==0){
        return 0;
    }
    for(let i =0; i<array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
let array1=[85,90,78,92];
let array2=[10,20,30];
let array3=[];
console.log("EXERCISE-3 Calculate the average ");
console.log(calArg(array1));
console.log(calArg(array2));
console.log(calArg(array3));

//Ex4
function countChar(text, char){
    let count=0;
    for(let i=0; i<text.length ;i++){
        if(text[i] === char){
            count++;
        }
    }
    return count;
}
console.log("EXERCISE-4 Count character in string");
console.log(countChar("hello world","o"));
console.log(countChar("aaa bbb a","a"));
console.log(countChar("abc","d"));

//Ex5
function countWord(text){
    let temp = text.trim();
    let count=0;
    for(let i=0; i<temp.length; i++){
        if(temp[i]== " " && temp[i+1] != " "){
            count++;
        }
    }
    return count+1;
}
console.log("EXERCISE-5 Count number of words in sentence");
console.log(countWord("hello world"));
console.log(countWord("this is the best day"));
console.log(countWord("a bb ccc ddddddd e"));



//Ex6
function votingCan(text){
    if(text.length == 0){
        return "There is not vote yet";
    }
    let countA=0;
    let countB=0;
    let countC=0;

    for(let i=0; i<text.length; i++){
        if(text[i]==="A"){
            countA++;
        }else if(text[i]==="B"){
            countB++;
        }else{
            countC++;
        }
    }

    let targetVote = countA;
    if(countB > targetVote){
        targetVote = countB;
    }
    if(countC > targetVote){
        targetVote = countC;
    }

    let winner=[];
    let index=0;

    if(countA ===targetVote){
        winner[index]="A";
        index++;
    }
    if(countB ===targetVote){
        winner[index]="B";
        index++;
    }
    if(countC ===targetVote){
        winner[index]="C";
        index++;
    }
    if(winner.length ===1){
        return winner[0]+" is the winner";
    }else{
        return winner[0] + " and " + winner[1] + " are the winner";
    }
}
let vote1=["A", "B", "A", "C", "A"];
let vote2=["A", "B", "B", "C", "A"];
let vote3=[];
console.log("EXERCISE-6 voting system for three candidates (A / B/ C)");
console.log(votingCan(vote1));
console.log(votingCan(vote2));
console.log(votingCan(vote3));