import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

const SliderControl = ({ data, onChange }) => {
  const handleChange = (event, newValue) => {
    onChange(newValue);
  };

  return (
    <Box sx={{ width: 320, marginTop: 4 }}>
      {data.map((series, seriesIndex) => (
        <Box key={series.id} sx={{ marginBottom: 3 }}>
          <Typography gutterBottom>{series.id}</Typography>
          {series.data.map((point, pointIndex) => (
            <Box key={`${series.id}-${point.x}`}>
              <Typography>{`Year ${point.x}: ${point.y}`}</Typography>
              <Slider
                value={point.y}
                aria-label={`slider-${series.id}-${point.x}`}
                valueLabelDisplay="auto"
                min={0}
                max={50}
                onChange={(event, value) =>
                  handleChange(event, { seriesIndex, pointIndex, value })
                }
              />
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default SliderControl;
