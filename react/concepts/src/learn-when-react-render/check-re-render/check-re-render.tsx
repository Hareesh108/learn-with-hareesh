import React, { useState, useMemo, useEffect } from "react";

const DoNotRenderMyCompoent = ({ data }: { data: boolean }) => {
  console.log(data, "child1");

  // Your component logic here
  useEffect(() => {
    console.log("child1 re-rendered");
  });

  return (
    <div>
      {/* Render your component using the data */}
      <p>{data}</p>
    </div>
  );
};

const DoRenderMineComponent = ({ data }: { data: boolean }) => {
  console.log(data, "child2");

  useEffect(() => {
    console.log("child2 re-rendered");
  });

  return (
    <>
      <p>{data}</p>
    </>
  );
};

const MemoizedComponent = React.memo(DoNotRenderMyCompoent);

const CheckReRender = () => {
  const [state, setState] = useState(true);
  const [unusedState, setunusedState] = useState(true);
  console.log(state, "state");

  const handleChange = () => {
    // Change the state
    setState((prev: boolean) => !state);
  };

  const unusedHandleChange = () => {
    // Change the state
    setunusedState((prev: boolean) => !unusedState);
  };

  // with useMemo component should not render
  const memoizedComponent = useMemo(
    () => <MemoizedComponent data={state} />,
    [state],
  );

  useEffect(() => {
    console.log("parent re-rendered");
  });

  return (
    <div>
      <button onClick={handleChange}>Change Data</button>

      <button onClick={unusedHandleChange}>Unused Button</button>
      {/* Render the memoized component */}
      {memoizedComponent}
      <DoRenderMineComponent data={state} />
    </div>
  );
};

export default CheckReRender;
