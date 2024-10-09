//Write your solutions in this file, don't forget to test your functions.
/*const countFromOne = (n) => {

    for(let i = 1; i <= n; i++) {

        console.log(i);
    }

};

countFromOne(10);
*/
/*const countEveryOdd = (n) => {
    for (i = 1; i <= n; i++) {

        if (i % 2 !== 0) {

            console.log(i);
        }
    
    }
}
countEveryOdd(15);
*/

/*const isNegative = (i) => {
    if (i < 0) {
        return true;
    } else {
        return false;
    }
    
};
isNegative(-8);
console.log(isNegative(-8));
*/

const betweenFiveAndTwenty = (num) => {
  console.log(num >= 5 && num <= 20);
};
betweenFiveAndTwenty(100);


const sumOfThreeOrFive = () => {
    let sum = 0
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
            
        }
    }
    return sum;
};
console.log(sumOfThreeOrFive());

const isAllLowerCase = (n) => {
    return n.toLowerCase() === n

};
console.log(isAllLowerCase("Food"))
