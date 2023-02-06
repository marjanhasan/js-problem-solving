//Problem 1: Let’s play a mind game

function mindGame(num){
    if(typeof(num) != 'number' || num < 0){
        return 'Please enter a positive number: ';
    }
    return (((num * 3) + 10) / 2) - 5;  
}

//Problem 2: Finding even or odd
function evenOdd(stringParameter){
    if(typeof stringParameter != 'string'){
        return 'Please input a string value: ';
    }

    if(stringParameter.length % 2 == 0){
        return 'even';
    }else{
        return 'odd';
    }
}

// Problem 3: Is Less or Greater than seven
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
function gemsToDiamond(gemsOfFirstFriend, gemsOfSecondFriend, gemsOfThirdFriend){
    if(typeof(gemsOfFirstFriend) != "number" || typeof(gemsOfSecondFriend) != "number" || typeof(gemsOfThirdFriend) != "number"){
        return 'Please input the value of gems of three individual frineds properly: ';
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