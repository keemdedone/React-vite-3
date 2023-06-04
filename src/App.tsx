import { useState } from "react";
import { data } from "./model/data";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import TextField from "@mui/material/TextField";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

import "./App.scss";

function App() {
  const [count, setCount] = useState<number>(0);
  const [seclectType, setSeclectType] = useState<number>(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="select-group">
        {data.map((info, i) => (
          <button
            key={info.id}
            onClick={() => {
              setSeclectType(i);
              setCount(0);
            }}
          >
            {info.name}
          </button>
        ))}
      </div>
      <h2>{data[seclectType].name}</h2>
      <table className="rs-table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Total Caphars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count + 1}</td>
            <td>{data[seclectType].caphars[count]}</td>
          </tr>
        </tbody>
      </table>
      <div className="card">
        <button
          onClick={() => setCount((count) => (count > 0 ? count - 1 : 0))}
        >
          -
        </button>
        <TextField
          color="success"
          type="number"
          variant="standard"
          className="level-input"
          value={count + 1}
          InputProps={{ inputProps: { min: 1, max: 20, length: 2 } }}
          onChange={(lv) => {
            const input = Number(lv.target.value);
            if (input < 21 && input > 0) {
              setCount(input - 1);
            }
          }}
        />
        <button
          onClick={() => setCount((count) => (count < 19 ? count + 1 : 19))}
        >
          +
        </button>
      </div>
      <div>
        <table className="list-table">
          <thead>
            <tr>
              <th>Level</th>
              <th>Caphars</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data[seclectType].caphars.map((_, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {i === 0
                    ? data[seclectType].caphars[0]
                    : data[seclectType].caphars[i] -
                      data[seclectType].caphars[i - 1]}
                </td>
                <td>{data[seclectType].caphars[i]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ThemeProvider>
  );
}

export default App;
