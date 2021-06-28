// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
console.log('*****CONVERTS A NUMBER TO A STRING*****')
const numToString = () => {
  let num = 3
  console.log('first, num is a: ' , typeof num)
  let stringNum = num.toString()
  console.log('then, it becomes a string: ' , typeof stringNum)
  return stringNum
}

console.log('the function returns the string: ' , numToString())

// const saveNumToString = () => {
//   let saveNum = document.getElementById("myNumber").innerHTML
//   return saveNum
// }

// saveNumToString()

// Write a JavaScript program to convert a string to the number.


console.log('******CONVERTS A STRING TO A NUMBER ****')
const stringToNum = () => {
  let string = '10.00'
  console.log('first, string is a: ' , typeof string)
  let num = parseFloat(string)
  console.log('then, it becomes a: ' , typeof num)
  return num
}

console.log('the function returns the number: ' , stringToNum())


console.log('****PRINTS DATATYPES*******')
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
  const printDatatype = () => {
    let cat = 'cat'
    let dog = 'dog'
    
    let booleany = true
    console.log(typeof booleany)
    let nully = null
    console.log(typeof nully)
    let undefiney = undefined
    console.log(typeof undefiney)
    let num = 7
    console.log(typeof num)
    let notNum = cat + dog
    console.log(typeof notNum)
    let string = 'howdy'
    console.log(typeof string)
  }

printDatatype()
  
// Write a JavaScript program that adds 2 numbers together.
console.log('******ADDS TWO NUMBERS TOGETHER******')

let add = function() {
  let x = 1 
  let y = 7

  return x+y
}

let answer = add()

console.log('addition answer:', answer)

// Write a JavaScript program that runs only when 2 things are true.
console.log('*****A FUNCTION THAT RETURNS WHEN BOTH ARE TRUE*****')

const mustBeTrue = (logic1, logic2) => {
  if (logic1 && logic2) {
    console.log('I am true')
    return
  }

}

mustBeTrue(true, true)


// Write a JavaScript program that runs when 1 of 2 things are true.
console.log('****RETURNS TRUE IF 1 IS TRUE****')
const oneIsTrue = (logic1, logic2) => {
  if(logic1 || logic2) {
    console.log('I am true')
    return
  }
}

oneIsTrue(false, true)

// Write a JavaScript program that runs when both things are not true.  

console.log('*****RETURNS WHEN BOTH ARE NOT TRUE****')

const notTrue = (logic1, logic2) => {
  if(!logic1 && !logic2){
    console.log('I am not true')
    return
  }
}

notTrue(false, false)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
