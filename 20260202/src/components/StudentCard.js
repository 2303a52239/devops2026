import React from "react";

function StudentCard(props) {
  // Calculate total
  const total = props.marks.reduce((sum, mark) => sum + mark, 0);

  // Calculate average
  const average = total / props.marks.length;

  // Decide grade
  let grade;
  if (average >= 90) grade = "A";
  else if (average >= 75) grade = "B";
  else if (average >= 60) grade = "C";
  else grade = "Fail";

  return (
    <div className="card">
      <h3>Name: {props.name}</h3>
      <p>Roll No: {props.roll}</p>
      <p>Marks: {props.marks.join(", ")}</p>
      <p>Total: {total}</p>
      <p>Grade: {grade}</p>
    </div>
  );
}

export default StudentCard;
