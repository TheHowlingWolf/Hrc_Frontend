import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import ReactTooltip from "react-tooltip";

import LinearGradient from "./LinearGradient.js";
import "./Map.css";

/**
 * Courtesy: https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json
 * Looking topojson for other countries/world?
 * Visit: https://github.com/markmarkoh/datamaps
 */
const INDIA_TOPO_JSON = require("./india.topo.json");

const PROJECTION_CONFIG = {
  scale: 500,
  center: [78.9629, 22.5937], // always in [East Latitude, North Longitude]
};

// Red Variants
const COLOR_RANGE = [
  "#ffedea",
  "#ffcec5",
  "#ffad9f",
  "#ff8a75",
  "#ff5533",
  "#e2492d",
  "#be3d26",
  "#9a311f",
  "#782618",
];

const DEFAULT_COLOR = "#EEE";

const getRandomInt = () => {
  return parseInt(Math.random() * 100);
};

const geographyStyle = {
  default: {
    outline: "none",
  },
  hover: {
    fill: "#ccc",
    transition: "all 250ms",
    outline: "none",
  },
  pressed: {
    outline: "none",
  },
};

// will generate random heatmap data on every call
const getHeatMapData = () => {
  return [
    { id: "AP", state: "Andhra Pradesh", value: 0 },
    { id: "AR", state: "Arunachal Pradesh", value: 0 },
    { id: "AS", state: "Assam", value: 2 },
    { id: "BR", state: "Bihar", value: 9 },
    { id: "CT", state: "Chhattisgarh", value: 0 },
    { id: "GA", state: "Goa", value: 0 },
    { id: "GJ", state: "Gujarat", value: 2 },
    { id: "HR", state: "Haryana", value: 1 },
    { id: "HP", state: "Himachal Pradesh", value: 0 },
    { id: "JH", state: "Jharkhand", value: 6 },
    { id: "KA", state: "Karnataka", value: 0 },
    { id: "KL", state: "Kerala", value: 0 },
    { id: "MP", state: "Madhya Pradesh", value: 6 },
    { id: "MH", state: "Maharashtra", value: 2 },
    { id: "MN", state: "Manipur", value: 0 },
    { id: "ML", state: "Meghalaya", value: 0 },
    { id: "MZ", state: "Mizoram", value: 0 },
    { id: "NL", state: "Nagaland", value: 0 },
    { id: "OD", state: "Odisha", value: 15 },
    { id: "PB", state: "Punjab", value: 2 },
    { id: "RJ", state: "Rajasthan", value: 0 },
    { id: "SK", state: "Sikkim", value: 0 },
    { id: "TN", state: "Tamil Nadu", value: 0},
    { id: "TG", state: "Telangana", value: 0 },
    { id: "TR", state: "Tripura", value: 0 },
    { id: "UK", state: "Uttarakhand", value: 1 },
    { id: "UP", state: "Uttar Pradesh", value: 5 },
    { id: "WB", state: "West Bengal", value: 26 },
    { id: "AN", state: "Andaman and Nicobar Islands", value: 0 },
    { id: "CH", state: "Chandigarh", value: 1 },
    { id: "DN", state: "Dadra and Nagar Haveli", value: 0 },
    { id: "DD", state: "Daman and Diu", value: 20 },
    { id: "DL", state: "Delhi", value: 9 },
    { id: "JK", state: "Jammu and Kashmir", value: 0 },
    { id: "LA", state: "Ladakh", value: 0 },
    { id: "LD", state: "Lakshadweep", value: 0 },
    { id: "PY", state: "Puducherry", value: 0 },
  ];
};

function Map() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [data, setData] = useState(getHeatMapData());

  const gradientData = {
    fromColor: COLOR_RANGE[0],
    toColor: COLOR_RANGE[COLOR_RANGE.length - 1],
    min: 0,
    max: data.reduce((max, item) => (item.value > max ? item.value : max), 0),
  };

  const colorScale = scaleQuantile()
    .domain(data.map((d) => d.value))
    .range(COLOR_RANGE);

  const onMouseEnter = (geo, current = { value: "NA" }) => {
    return () => {
      setTooltipContent(`${geo.properties.name}: ${current.value}`);
    };
  };

  const onMouseLeave = () => {
    setTooltipContent("");
  };

  const onChangeButtonClick = () => {
    setData(getHeatMapData());
  };

  return (
    <div className="full-width-height container">
      <ReactTooltip>{tooltipContent}</ReactTooltip>
      <ComposableMap
        projectionConfig={PROJECTION_CONFIG}
        projection="geoMercator"
        width={400}
        height={270}
        data-tip=""
      >
        <Geographies geography={INDIA_TOPO_JSON}>
          {({ geographies }) =>
            geographies.map((geo) => {
              //console.log(geo.id);
              const current = data.find((s) => s.id === geo.id);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                  style={geographyStyle}
                  onMouseEnter={onMouseEnter(geo, current)}
                  onMouseLeave={onMouseLeave}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <LinearGradient data={gradientData} />

    </div>
  );
}

export default Map;
