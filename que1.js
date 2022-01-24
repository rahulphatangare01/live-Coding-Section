// Que 1
// Write an arrow function that expects an array of integers, and returns the sum of the elements of the array.Use the built -in method reduce on the array argument

const array0 = [10, 20, 30, 40];
const reducer = (x, y) => 
{
  return   x + y;
}

console.log(array0.reduce(reducer));


//Que 2
// Find the second Highest element from the array  const arr = [12, 35, 1, 10, 34, 1]

function findSecondLargestElem(arr) {
    let first = -1, second = -1;
    for (let i = 0; i <= arr.length - 1; i++)
     {
        if (arr[i] > first) 
        {
            second = first;
             first = arr[i];
        }
        else if (arr[i] > second && arr[i] != first) 
        {
            return  second = arr[i];
        }
    }
    console.log(second);
}
let arr = [12, 35, 1, 10, 34, 1];
console.log(findSecondLargestElem(arr));

//que 3

// **Problem Statement**#

/* Write a function that takes a variable testVariable, which contains a string, and checks whether or not it is a palindrome.
 *What is a “Palindrome”?*#
 A Palindrome is a string that reads the same backward and forwards. For example madammadam, poppop, etc. All strings with length 11 are considered palindromes.
 Remember, lower case letters are different from upper case letters, therefore, AdaAda is not a palindrome.
 **Input**#
 A variable testVariable containing a string.
 **Output**#
true if the input string is a palindrome. false if the string is not a palindrome.
 Sample Input#
 "madam"
  Sample Output#
*/ true

function sol(testVariable)
{
    let a = testVariable.split("").reverse("").join("")

    if(a == testVariable)
    {
        return true
    }
    return false
}
 console.log(sol("madam"));  

 //que.4
 // Program to find out prime numbers in a given array

function ran(num)
{
    num = [12]

for(var i = 2;i<num;i++)
{
    if(num%i===0)
    {
        return false;
    }
}
    return true;
}

console.log(ran());  


//que 5

/* Write a function that takes a number testVariable and returns a string that is its equivalent hexadecimal number.
 **Input**#
 A variable testVariable containing the decimal number.
 **Output#**
 String variable that contains the equivalent hexadecimal number of the input number.
 Sample Input#
 11
 Sample Output#

 "1011"
*/
function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

let number = prompt('Enter a decimal number: ');

convertToBinary(number);