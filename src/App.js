import "./App.css";
import React, { useState } from "react";
import MyResponsiveAreaBump from "./Areabump";
import { data as initialData } from "./data";
import SliderControl from "./SliderControl";

function App() {
  const [data, setData] = useState(initialData);

  const handleSliderChange = ({ seriesIndex, pointIndex, value }) => {
    const newData = [...data];
    newData[seriesIndex].data[pointIndex].y = value;
    setData(newData);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Bump Chart for Transport</h1>
      </div>
      <div className="content">
        <div className="chart">
          <MyResponsiveAreaBump data={data} />
        </div>
        <div className="controls">
          <SliderControl data={data} onChange={handleSliderChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
