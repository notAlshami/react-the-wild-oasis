"use client";

import { useState } from "react";

function Counter({ users }) {
  const [counter, setCounter] = useState(0);

  return <button onClick={() => setCounter((c) => c + 1)}>{counter}</button>;
}

export default Counter;
