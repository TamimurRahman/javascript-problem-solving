const marks = [85, 92, 78, 96, 88, 74, 100];

analyzeMarks(marks);
function analyzeMarks(marks) {
  // const sortedMarks = sortMarks(marks);
  let totalMarks = 0;
  let passCount = 0;
  let min = marks[0];
  let max = marks[0];
  for (let i = 0; i < marks.length; i++) {
    if (min > marks[i]) {
      min = marks[i];
    }
    if (max < marks[i]) {
      max = marks[i];
    }
    totalMarks += marks[i];
    if (marks[i] >= 40) {
      passCount++;
    }
  }
  let avgMarks = totalMarks / marks.length;

  console.log("Highest Marks : ", max);
  console.log("Lowest Marks : ", min);
  console.log("Total Marks : ", totalMarks);
  console.log("Average : ", avgMarks.toFixed(2));
  console.log("Pass Student : ", passCount);
}