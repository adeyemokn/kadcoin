import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://kadcoin.vercel.app/" target="_blank">
          <img
            src={`https://framerusercontent.com/images/7Fjd4JhBn4XdPoBAztnI31U.webp`}
            className="logo"
            alt="kadcoin logo"
          />
        </a>
      </div>
      <h1>Welcome to KADCOIN</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Tap2Earn {count}
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
