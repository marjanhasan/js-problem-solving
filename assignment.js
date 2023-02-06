//Problem 1: Let’s play a mind game

/* mindGame() will return especially two things,

1) if the input is less than zero(negative) or isn't a number type,
it'll return a string so that the user can understand what should enter as an input.

2) if the value is zero or more than that then it'll perform a math operation,
    i) multiply 3 with input value then,
    ii) add 10 to the (i) value then,
    iii) divide 2 from the (ii) value then,
    iv) subtract 5 from the (iii) value then, return it.
*/

function mindGame(num){
    if(typeof(num) != 'number' || num < 0){
        return 'Please enter a positive number: ';
    }
    return (((num * 3) + 10) / 2) - 5;  
}

//Problem 2: Finding even or odd

/* evenOdd() has two major operation,

1) if the input isn't a string type,
it'll return a string so that the user can understand what should enter as an input.

2) if the value is string type then,
it'll return that the value of string length is even or odd.

*/

function evenOdd(stringParameter){
    if(typeof stringParameter != 'string'){
        return 'Please input a string value: ';
    }

    // .length is used to find the length of the string in number
    if(stringParameter.length % 2 == 0){
        return 'even';
    }else{
        return 'odd';
    }
}

// Problem 3: Is Less or Greater than seven

/* isLGSeven() has two major operation,

1) if the input isn't a number type,
it'll return a string so that the user can understand what should enter as an input.

2) if the value is number type then,
it'll check the difference from 7 of the input value is lest than 7 or not. 
if the difference is less than 7 then it'll return the difference value,
otherwise it'll multiply twice of the input value and return it.

*/

function isLGSeven(number){
    if(typeof number != 'number'){
        return 'Please input a number: ';
    }

    const differenceFromInput = number - 7;
    if(differenceFromInput < 7){
        return differenceFromInput;
    }
    return number * 2;
}

// Problem 4: Finding Bad data

/* findingBadData() has two major operation,

1) if the input isn't a array(in JavaScript it's considered as object) type,
it'll return a string so that the user can understand what should enter as an input.

2) if the value is array type then,
    i) declare and initialize a variable named badData,
    ii) run a for loop till the length of the array,
    iii) check if the value is negative, then increment the value of badData,
    iv) return the final value of badData.

*/

function findingBadData(collectionOfData){
    if(typeof collectionOfData != 'object'){
        return 'Please input an array of data which has positive and negative value: ';
    }
    
    let badData = 0;
    for(let i = 0; i < collectionOfData.length; i++){
        if(collectionOfData[i] < 0){
            badData++;
        }
    }
    return badData;
}


// Problem 5: Convert your gems into diamond

/* gemsToDiamond() will check if all of the parameter is number type or not at the very beginning then,

it'll multiply 21 with the first parameter, 32 with the second and 43 with the last parameter then,
it'll make an addition operation and assign it with a totalDiamond variable.then,
check it if it's more than 1000 or not. if the value is more than 1000 than it'll subtract 2000 from totalDiamond and return it.
or if the totalDiamond is less than 1000 then it'll simply return it. 

*/

function gemsToDiamond(gemsOfFirstFriend, gemsOfSecondFriend, gemsOfThirdFriend){
    if(typeof(gemsOfFirstFriend) != "number" || typeof(gemsOfSecondFriend) != "number" || typeof(gemsOfThirdFriend) != "number"){
        return 'Please input the value of gems of three individual friends properly: ';
    }

    gemsOfFirstFriend *= 21;
    gemsOfSecondFriend *= 32;
    gemsOfThirdFriend *= 43;

    let totalDiamond = gemsOfFirstFriend + gemsOfSecondFriend + gemsOfThirdFriend;
    if(totalDiamond > 1000 * 2){
        totalDiamond -= 2000;
    }

    return totalDiamond;
}