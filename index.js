
const readline = require('readline');
const students = require('./students');
const { calculateAverage, getTopStudents } = require('./utils');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Student Grades Manager!");

// Function to display students and stats

function displayStats() {
  console.log("\nAll Students:");
  students.forEach(student => console.log(`${student.name}: ${student.grade}`));

  const average = calculateAverage(students.map(s => s.grade));
  console.log(`\nAverage Grade: ${average.toFixed(2)}`);

  const topStudents = getTopStudents(students);
  console.log("\nTop Students:");
  topStudents.forEach(s => console.log(`${s.name}: ${s.grade}`));
}

// Prompt user to add a new student

function addStudent() {
  rl.question("Enter student name (or type 'exit' to quit): ", (name) => {
    if (name.toLowerCase() === 'exit') {
      displayStats();
      rl.close();
      return;
    }
    rl.question("Enter student grade: ", (grade) => {
      const numericGrade = Number(grade);
      if (isNaN(numericGrade)) {
        console.log("Please enter a valid number.");
      } else {
        students.push({ name, grade: numericGrade });
        console.log(`${name} added successfully!`);
      }
      addStudent(); // Recursive call to add more students
    });
  });
}

// Start the program
addStudent();
