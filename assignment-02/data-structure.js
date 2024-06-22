let students = [
  { id: 1, name: "Alice Johnson", grades: [85, 92, 88] },
  { id: 2, name: "Bob Smith", grades: [78, 81, 90] },
  { id: 3, name: "Charlie Brown", grades: [95, 90, 93] },
  { id: 4, name: "David Wilson", grades: [70, 80, 65] },
];

const calculateAverageGrades = (studentsArray) => {
  return studentsArray.map((s) => ({
    id: s.id,
    name: s.name,
    averageGrade: parseFloat(
      (s.grades.reduce((ini, val) => ini + val, 0) / s.grades.length).toFixed(2)
    ),
  }));
};

const findTopStudent = (studentsArray) => {
  return sortStudentsByGrade(studentsArray)[0];
};

const sortStudentsByGrade = (studentsArray) => {
  return studentsArray.sort((a, b) => {
    const avgA =
      a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
};
