import { useState } from "react";
import "./App.css";

const Button = () => {
  const [hovered, setHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: hovered ? "#1d1df0" : "#31315f",
    color: "white",
    padding: "10px 20px",
    border: "1px solid #ff3300",
    borderRadius: "5px",
  };

  return (
    <button
      style={buttonStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      Click me
    </button>
  );
};

function App() {
  return <Button />;
}

export default App;
