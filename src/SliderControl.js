import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SliderControl = ({ data, onChange }) => {
  const handleChange = (event, { seriesIndex, pointIndex, value }) => {
    onChange({ seriesIndex, pointIndex, value });
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 400, margin: "auto" }}>
      {data.map((series) => (
        <Accordion
          key={series.id}
          sx={{
            marginBottom: 2,
            borderLeft: "0.5px solid #d3d3d3",
            borderRight: "0.5px solid #d3d3d3",
            borderTop: "0.5px solid #d3d3d3",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${series.id}-content`}
            id={`${series.id}-header`}
          >
            <Typography>{series.id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {series.data.map((point, pointIndex) => (
              <Box
                key={`${series.id}-${point.x}`}
                sx={{ marginBottom: 2, width: "100%" }}
              >
                <Typography>{`Year ${point.x}: ${point.y}`}</Typography>
                <Slider
                  value={point.y}
                  aria-label={`slider-${series.id}-${point.x}`}
                  valueLabelDisplay="auto"
                  min={0}
                  max={50}
                  onChange={(event, value) =>
                    handleChange(event, {
                      seriesIndex: data.indexOf(series),
                      pointIndex,
                      value,
                    })
                  }
                />
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default SliderControl;
