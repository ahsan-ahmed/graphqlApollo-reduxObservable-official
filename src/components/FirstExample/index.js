import React, { useEffect, useState } from "react";

export const CounterWithNameAndSideEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Flavio");

  useEffect(() => {
    console.log(`Hi ${name} you clicked ${count} times`);
  }, [name, count]);

  return (
    <div>
      <p>
        Hi {name} you clicked {count} times
      </p>
      <button onClick={() => setCount(count)}>Click me</button>
      <button onClick={() => setName(name === "Flavio" ? "Roger" : "Flavio")}>
        Change name
      </button>
    </div>
  );
};
