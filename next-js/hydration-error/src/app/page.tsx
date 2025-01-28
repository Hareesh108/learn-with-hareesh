"use client";

import styles from "./styles/Home.module.css";
import { useState, useEffect } from "react";

const HydrationErrorDemo = () => {
  // const number = Math.floor(Math.random() * 10)
  const time = new Date().toLocaleTimeString();

  // console.log(number)
  console.log(time);

  return (
    <div>
      {/* To ignore the hydration error we need to use the suppressHydrationWarning */}
      {/* <p suppressHydrationWarning>Random number: {number}</p> */}

      <p>Current time: {time}</p>
    </div>
  );
};

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  console.log(isClient, "isClient");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const triggerAlert = () => alert("Please subscribe");

  // if (!isClient) return null

  return (
    <main className={styles.main}>
      <h1>
        Why Hydration Errors by{" "}
        <span className={styles.highlight}>Browser Extensions</span>?
      </h1>
      <button onClick={triggerAlert} className={styles.btn}>
        Trigger Alert
      </button>
      <HydrationErrorDemo />
    </main>
  );
}
