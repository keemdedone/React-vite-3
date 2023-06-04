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
  const [currentLV, setCurrentLV] = useState<number>(0);
  const [targetLV, setTargetLV] = useState<number>(0);
  const [seclectType, setSeclectType] = useState<number>(0);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="select-group">
        {data.map((info, i) => (
          <button
            key={info.id}
            onClick={() => {
              setSeclectType(i);
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
            <th>Level different</th>
            <th>Use total Caphars</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{targetLV - currentLV >= 0 ? targetLV - currentLV : 0}</td>
            <td>
              {targetLV - currentLV <= 0
                ? 0
                : data[seclectType].caphars[targetLV - 1] -
                  (currentLV - 1 < 0
                    ? 0
                    : data[seclectType].caphars[currentLV - 1])}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="card">
        <h3>Current level :</h3>
        <TextField
          color="success"
          type="number"
          variant="standard"
          className="level-input"
          value={currentLV < 0 ? "" : currentLV}
          InputProps={{ inputProps: { min: 0, max: 20, length: 2 } }}
          onChange={(lv) => {
            const input = Number(lv.target.value);
            console.log("current : " + input);
            setCurrentLV(input);
          }}
        />
        <h3>Wanted level : </h3>
        <TextField
          color="success"
          type="number"
          variant="standard"
          className="level-input"
          value={
            targetLV < 0
              ? ""
              : targetLV < currentLV
              ? setTargetLV(currentLV)
              : targetLV
          }
          InputProps={{ inputProps: { min: 0, max: 20, length: 2 } }}
          onChange={(lv) => {
            const input = Number(lv.target.value);
            console.log("target : " + input);
            setTargetLV(input);
          }}
        />
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
            <tr>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
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
