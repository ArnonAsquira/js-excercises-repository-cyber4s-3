const a = 1; b = 5; c = 6;  // stands for x**2 - 6*x + 9 = 0
let solutionA = solutionB = 0
// your code goes here
solutionA = (-b + Math.sqrt((b * b) - (a * 4 * c))) / (a * 2)
solutionB = (-b - Math.sqrt((b * b) - (a * 4 * c))) / (a * 2)
console.log(solutionA, solutionB)