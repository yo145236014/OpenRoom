import { useState } from "react";

function App() {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");
  const [credit, setCredit] = useState(1);
  const [grade, setGrade] = useState(4.0);

  const addClass = () => {
    setClasses([...classes, { className, credit, grade }]);
    setClassName(""); // Reset input
  };

  const calculateCGPA = () => {
    const totalCredits = classes.reduce((sum, cls) => sum + cls.credit, 0);
    const weightedSum = classes.reduce((sum, cls) => sum + cls.credit * cls.grade, 0);
    return (weightedSum / totalCredits).toFixed(2);
  };

  return (
    <div>
      <h1>CGPA Calculator</h1>
      <input
        type="text"
        placeholder="Class Name"
        value={className}
        onChange={(e) => setClassName(e.target.value)}
      />
      <select value={credit} onChange={(e) => setCredit(Number(e.target.value))}>
        {[1, 2, 3, 4, 5].map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <select value={grade} onChange={(e) => setGrade(Number(e.target.value))}>
        {[4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0].map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <button onClick={addClass}>Add Class</button>
      <button onClick={() => alert(`Your CGPA: ${calculateCGPA()}`)}>Calculate CGPA</button>
      <ul>
        {classes.map((cls, index) => (
          <li key={index}>{cls.className} (Credits: {cls.credit}, Grade: {cls.grade})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;