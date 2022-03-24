function getGrade(score1, score2, score3) {
  let avg = (score1 + score2 + score3) / 3;
  if (avg <= 100 && avg >= 90) {
    return "A";
  } else if (avg < 90 && avg >= 80) {
    return "B";
  } else if (avg < 80 && avg >= 70) {
    return "C";
  } else if (avg < 70 && avg >= 60) {
    return "D";
  } else if (avg < 60 && avg >= 0) {
    return "F";
  }
}
console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
