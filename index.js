const students = require('./students');
const { calculateAverage, getTopStudents } = require('./utils');

// Display all students

console.log("All Students:");
students.forEach(student => console.log(`${student.name}: ${student.grade}`));

// Calculate and display average grade

const average = calculateAverage(students.map(s => s.grade));
console.log(`\nAverage Grade: ${average}`);

// Display top students

const topStudents = getTopStudents(students);
console.log("\nTop Students:");
topStudents.forEach(s => console.log(`${s.name}: ${s.grade}`));
