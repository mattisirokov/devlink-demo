"use client";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface UVRadialProps {
  value: number;
}

export default function UVRadial({ value }: UVRadialProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        margin: "0 auto",
        width: "300px",
        height: "300px",
      }}
    >
      <CircularProgressbar
        value={value}
        strokeWidth={7}
        text={`${value}`}
        minValue={0}
        maxValue={10}
        styles={buildStyles({
          rotation: 0.5,
          textSize: "0.5rem",
          pathColor: "#21c55e",
          textColor: "white",
          trailColor: "#d6d6d6",
          backgroundColor: "#21c55e",
        })}
      />
    </div>
  );
}
