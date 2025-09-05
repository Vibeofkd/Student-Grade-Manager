// Function to calculate average grade

const calculateAverage = (grades) => {
  const total = grades.reduce((sum, grade) => sum + grade, 0);
  return total / grades.length;
};

// Function to get students above a threshold
const getTopStudents = (students, threshold = 80) => {
  return students.filter(student => student.grade >= threshold);
};

module.exports = { calculateAverage, getTopStudents };
