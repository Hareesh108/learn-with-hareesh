import { useState } from "react";

function Basic() {
  // 01:
  const myState = useState("Hareesh");
  console.log(myState, "myState");
  console.log(myState[0], "myState[0]");
  console.log(myState[1], "myState[1]");

  // 02:
  const [count, setCount] = useState(0);
  console.log(count, "count");

  return (
    <div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Click{" "}
      </button>
      <p>Count is : {count}</p>
    </div>
  );
}

export default Basic;
