import React from "react";
import { ResponsiveAreaBump } from "@nivo/bump";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveAreaBump = ({ data /* see data tab */ }) => (
  <ResponsiveAreaBump
    data={data}
    margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
    spacing={8}
    colors={{ scheme: "nivo" }}
    blendMode="multiply"
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "TypeScript",
        },
        id: "dots",
      },
      {
        match: {
          id: "CoffeeScript",
        },
        id: "lines",
      },
      {
        match: {
          id: "Some other Data",
        },
        id: "dots",
      },
    ]}
    startLabel="id"
    endLabel="id"
    axisTop={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -36,
      truncateTickAt: 0,
    }}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
  />
);

export default MyResponsiveAreaBump;
