// 1. Hello World Component
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

// 2. Button Click Counter
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// 3. Display Current Time
function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  return <p>Current Time: {now}</p>;
}

// 4. Simple Input Field
function InputField() {
  const [text, setText] = useState("");

  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something..." 
      />
      <p>You typed: {text}</p>
    </div>
  );
}

// 5. Greeting Based on Time
function Greeting() {
  const hours = new Date().getHours();
  const greet = hours < 12 ? "Good Morning" : hours < 18 ? "Good Afternoon" : "Good Evening";

  return <h1>{greet}!</h1>;
}

// 6. Toggle Visibility
function ToggleVisibility() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>This is visible text!</p>}
    </div>
  );
}

// 7. List Rendering
function ItemList() {
  const items = ["Apple", "Banana", "Cherry"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// 8. Background Color Toggle
function ColorToggle() {
  const [color, setColor] = useState("white");

  return (
    <div
      style={{ backgroundColor: color, padding: "20px", textAlign: "center" }}
    >
      <button onClick={() => setColor(color === "white" ? "blue" : "white")}>
        Toggle Color
      </button>
    </div>
  );
}

// 9. Simple Fetch Example
import { useEffect, useState } from "react";
function FetchExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setData(data.slice(0, 5))); // Get first 5 items
  }, []);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

// 10. Simple Form Submit
function SimpleForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default function App() {
  return (
    <div>
      <HelloWorld />
      <Counter />
      <CurrentTime />
      <InputField />
      <Greeting />
      <ToggleVisibility />
      <ItemList />
      <ColorToggle />
      <FetchExample />
      <SimpleForm />
    </div>
  );
}
