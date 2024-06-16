import "./App.css";
import React, { useState } from "react";
import MyResponsiveAreaBump from "./Areabump";
import { data as initialData } from "./data";
import SliderControl from "./SliderControl";
import { Block } from "@mui/icons-material";

function App() {
  const [data, setData] = useState(initialData);

  const handleSliderChange = ({ seriesIndex, pointIndex, value }) => {
    const newData = [...data];
    newData[seriesIndex].data[pointIndex].y = value;
    setData(newData);
  };

  return (
    <div className="App" style={{ height: "80vh", display: "flex" }}>
      <div style={{ flex: 3 }}>
        <MyResponsiveAreaBump data={data} />
      </div>
      <div style={{ flex: 1 }}>
        <SliderControl data={data} onChange={handleSliderChange} />
      </div>
    </div>
  );
}

export default App;
