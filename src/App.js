import "./App.css";
import MyResponsiveAreaBump from "./Areabump";
import { data as InitialData } from "./data";
import React, { useState } from "react";
import SliderControl from "./SliderControl";

function App() {
  const [data, setData] = useState(InitialData);

  const handleSliderChange = ({ seriesIndex, pointIndex, value }) => {
    const newData = [...data];
    newData[seriesIndex].data[pointIndex].y = value;
    setData(newData);
  };

  return (
    <div className="App" style={{ height: "80vh", display: "flex" }}>
      <div style={{ flex: 1 }}>
        <MyResponsiveAreaBump data={data} />
      </div>
      <div style={{ flex: 1 }}>
        <SliderControl data={data} onChange={handleSliderChange} />
      </div>
    </div>
  );
}

export default App;
