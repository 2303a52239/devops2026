import React from "react";
import StudentCard from "./components/StudentCard";

function App() {
  // Student data stored in parent
  const students = [
    { name: "Vyshnavi", roll: 101, marks: [85, 78, 90] },
    { name: "Rahul", roll: 102, marks: [65, 70, 72] },
    { name: "Anjali", roll: 103, marks: [92, 88, 95] }
  ];

  return (
    <div className="app">
      <h1>Student Details</h1>

      {/* Reusing child component */}
      {students.map((stu, index) => (
        <StudentCard
          key={index}
          name={stu.name}
          roll={stu.roll}
          marks={stu.marks}
        />
      ))}
    </div>
  );
}

export default App;
