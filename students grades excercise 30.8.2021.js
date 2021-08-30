const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92];
// your code goes here

//function for grades range
function rangeOfGrades(grades){
    let maxGrade = grades[0];
    let minGrade = grades[0];
    for(let i = 1; i < grades.length; i++){
        if(grades[i] > maxGrade) {
          maxGrade = grades[i];  
        }else if(grades[i] < minGrade){
           minGrade = grades[i];
        }
    }
    return ("The total range of grades is " + (maxGrade - minGrade));

}
console.group(rangeOfGrades(grades));

//function for the median grade
 function medianGrade(grades) {
    let gradesReplacerArray = [];
    gradesReplacerArray.push(...grades);
    let gradesSorted = [];
    let indexCounter = gradesReplacerArray.length;
    let halfWayIndex = Math.floor(indexCounter / 2);
    for(let j = 0; j < indexCounter; j++){
        let maxGrade = 0;
        for(let i = 0; i < gradesReplacerArray.length; i++){
                if(gradesReplacerArray[i] > maxGrade){
                maxGrade = gradesReplacerArray[i];
                }
            }
        gradesSorted.push(maxGrade);
        gradesReplacerArray.splice(gradesReplacerArray.indexOf(maxGrade), 1);
    }
    return ("The median grade is " + gradesSorted[halfWayIndex]);
}
console.log( medianGrade(grades));

    
//function for second half range of grades
function secondHalfRangeFunc(grades){
   let secondHalfIndex = Math.floor(grades.length / 2) ;
   let secondHalfGrades = grades.slice(secondHalfIndex );
   let maxGrade = secondHalfGrades[0];
   let minGrade = secondHalfGrades[0];
   for(let i = 1; i < secondHalfGrades.length; i++){
      if(secondHalfGrades[i] >= maxGrade){
        maxGrade = secondHalfGrades[i];
      }else if(secondHalfGrades[i] <= minGrade){
        minGrade = secondHalfGrades[i];
      }
   }
   let secondHalfRange = (maxGrade - minGrade);
   return ("The second half range is " +secondHalfRange);
}
console.log(secondHalfRangeFunc(grades));
