const marksTools = require('sem3-marks-tools-aditya');

const subjects = [
  { name: 'Mathematics', marks: 82, total: 100 },
  { name: 'Programming', marks: 91, total: 100 },
  { name: 'Physics', marks: 74, total: 100 }
];

const percentages = subjects.map(function (subject) {
  return marksTools.percentage(subject.marks, subject.total);
});

console.log('SEMESTER 3 RESULT');
console.log('-----------------');

subjects.forEach(function (subject) {
  const percent = marksTools.percentage(subject.marks, subject.total);
  const grade = marksTools.getGrade(percent);

  console.log(subject.name + ': ' + subject.marks + '/' + subject.total + ' (' + percent.toFixed(1) + '%) - Grade ' + grade);
});

console.log('-----------------');
console.log('Average: ' + marksTools.average(percentages).toFixed(1) + '%');
