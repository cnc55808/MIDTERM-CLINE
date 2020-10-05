let userChoice = prompt("Do you want to do an average calculation or random multiplication? Input 'avg' for average and 'mult' for multiplication") 

function calcAvgSquare(num1, num2, num3) {
  return ((num1 + num2 + num3)/3) * (num1 * num1);  
}

function randomMultiply(product1, product2) {
  return product1 * product2
}

if (userChoice == "avg") {
  let inpt1 = Number(prompt("What is the first number?")) 
  let inpt2 = Number(prompt("What is the second number?")) 
  let inpt3 = Number(prompt("What is the third number?")) 
  let output = calcAvgSquare(inpt1,inpt2,inpt3)
  alert(`The answer is ${output}`) 
} else if (userChoice == "mult") {
  let inpt4 = Number(prompt("What number should I multiply?"))
  let random = Math.floor(Math.random() * 10) + 1
  let output2 = randomMultiply(inpt4, random)
  alert(`The result of multiplying the random number ${random} with ${inpt4} is ${output2}`)
  }
