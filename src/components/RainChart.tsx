"use client";

import { useRef, useEffect } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface ChartComponentProps {
  labels: string[];
  data: number[];
}

export default function RainChart({ labels, data }: ChartComponentProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"bar", number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current && chartInstance.current === null) {
      const chartConfig: ChartConfiguration<"bar", number[], string> = {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Chance of rain",
              data: data,
              backgroundColor: "rgb(75, 192, 192)",
              barThickness: 5,
              borderRadius: 4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              ticks: {
                color: "white",
              },
            },
            x: {
              ticks: {
                color: "white",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              bodyColor: "rgb(255, 255, 255)",
            },
          },
        },
      };

      chartInstance.current = new Chart(chartRef.current, chartConfig);
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data, labels]);

  return (
    <canvas
      ref={chartRef}
      style={{
        height: "250px",
        width: "100%",
      }}
    />
  );
}
