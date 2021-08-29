const num = 725;
let sum = 0;
// your code goes here
let numAsString = num.toString();
for(var i = 0; i < numAsString.length; i++){
    sum += parseInt(numAsString[i],10);
}
console.log(sum);

