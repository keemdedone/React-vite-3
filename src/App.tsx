import { useState } from "react";
import "./App.scss";
import { data } from "./model/data";

function App() {
  const [count, setCount] = useState<number>(0);
  const [seclectType, setSeclectType] = useState<number>(0);

  return (
    <>
      <div className="select-group">
        {data.map((info, i) => (
          <button onClick={() => setSeclectType(i)}>{info.name}</button>
        ))}
      </div>
      <h2>{data[seclectType].name}</h2>
      <table className="rs-table">
        <tr>
          <th>Level</th>
          <th>Total Caphars</th>
        </tr>
        <tr>
          <td>{count + 1}</td>
          <td>{data[seclectType].caphars[count]}</td>
        </tr>
      </table>
      <div className="card">
        <button
          onClick={() => setCount((count) => (count !== 0 ? count - 1 : 0))}
        >
          -
        </button>
        <button
          onClick={() => setCount((count) => (count !== 19 ? count + 1 : 19))}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
