import { useState } from "react";
import './App.css'; // We'll add styles later

function App() {
  // State to store all classes
  const [classes, setClasses] = useState([]);
  // State for the current class inputs
  const [className, setClassName] = useState("");
  const [credit, setCredit] = useState(1);
  const [grade, setGrade] = useState(4.0);
  // State to display CGPA result
  const [cgpa, setCgpa] = useState(null);

  // Add a new class to the list
  const addClass = () => {
    if (!className.trim()) {
      alert("Please enter a class name!");
      return;
    }
    const newClass = {
      className: className.trim(),
      credit: credit,
      grade: grade,
    };
    setClasses([...classes, newClass]);
    setClassName(""); // Clear input after adding
  };

  // Calculate CGPA
  const calculateCGPA = () => {
    if (classes.length === 0) {
      alert("Add at least one class!");
      return;
    }
    const totalCredits = classes.reduce((sum, cls) => sum + cls.credit, 0);
    const weightedSum = classes.reduce((sum, cls) => sum + cls.credit * cls.grade, 0);
    const result = (weightedSum / totalCredits).toFixed(2);
    setCgpa(result);
  };

  // Reset all inputs
  const resetCalculator = () => {
    setClasses([]);
    setCgpa(null);
  };

  return (
    <div className="app">
      <h1>CGPA Calculator</h1>
      
      {/* Input Form */}
      <div className="input-group">
        <input
          type="text"
          placeholder="Class Name (e.g., Math 101)"
          value={className}
          onChange={(e) => setClassName(e.target.value)}
        />
        <select value={credit} onChange={(e) => setCredit(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((c) => (
            <option key={c} value={c}>Credits: {c}</option>
          ))}
        </select>
        <select value={grade} onChange={(e) => setGrade(Number(e.target.value))}>
          {[4.0, 3.7, 3.3, 3.0, 2.7, 2.3, 2.0, 1.7, 1.3, 1.0].map((g) => (
            <option key={g} value={g}>Grade: {g}</option>
          ))}
        </select>
        <button onClick={addClass}>Add Class</button>
      </div>

      {/* Action Buttons */}
      <div className="actions">
        <button onClick={calculateCGPA}>Calculate CGPA</button>
        <button onClick={resetCalculator} className="reset">Reset</button>
      </div>

      {/* Results */}
      {cgpa !== null && (
        <div className="result">
          <h2>Your CGPA: <span>{cgpa}</span></h2>
        </div>
      )}

      {/* List of Added Classes */}
      <div className="class-list">
        <h3>Your Classes:</h3>
        {classes.length === 0 ? (
          <p>No classes added yet.</p>
        ) : (
          <ul>
            {classes.map((cls, index) => (
              <li key={index}>
                {cls.className} (Credits: {cls.credit}, Grade: {cls.grade})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;