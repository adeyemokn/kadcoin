import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://kadcoin.vercel.app/" target="_blank">
          <img
            src={`https://1drv.ms/i/c/6de8bb7a47005835/IQPZdzaAdSEVQaDj25NEIy2SARd482AhP3-Q1EVXbt0WXOk?width=1024`}
            className="logo"
            alt="kadcoin logo"
          />
        </a>
      </div>
      <h1>Welcome to KADCOIN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tap2Earn: {count}
        </button>
      </div>
      <div>
        <p>
          Click{" "}
          <a
            href="https://www.twitter.com/habidoshaker"
            target="_blank"
          >
            here
          </a>{" "}
          to learn more.
        </p>
      </div>
    </>
  );
}

export default App;
