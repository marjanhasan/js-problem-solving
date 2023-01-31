function average(arrOfMarks) {
    //write your code here
    // don't forget to write the return
    let sum = 0;
    for (let i = 0; i < arrOfMarks.length; i++) {
        sum += arrOfMarks[i];
    }
    return (sum / arrOfMarks.length);
}

let marks = [75.25, 65, 80, 35.45, 99.50];
let result = average(marks);
console.log(parseFloat(result.toFixed(2)));

marks = [100, 100, 100, 100, 100];
result = average(marks);
console.log(result);

function solution(letter) {
    if (letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u') {
        console.log("VOWEL");
    }
    else {
        console.log("CONSONANT");
    }
}

solution('a');
solution('u');
solution('k');

