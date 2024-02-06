import React, { useMemo, useState } from "react";

const DoNotRenderMyComponent = ({ data }: { data: string }) => {
  // Your component logic here
  return (
    <div>
      {/* Render your component using the data */}
      <p>{data}</p>
    </div>
  );
};

const MemoizedComponent = React.memo(DoNotRenderMyComponent);

const StateChange = () => {
  const [state, setState] = useState("Initial Data");

  const handleChange = () => {
    // Change the state
    setState("Updated Data");
  };

  const memoizedComponent = useMemo(
    () => <MemoizedComponent data={state} />,
    [state],
  );

  return (
    <div>
      <button onClick={handleChange}>Change Data</button>
      {/* Render the memoized component */}
      {memoizedComponent}
    </div>
  );
};

export default StateChange;
