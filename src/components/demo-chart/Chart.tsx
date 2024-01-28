"use client";

import { useRef, useEffect } from "react";

import Chart, { ChartConfiguration } from "chart.js/auto";

interface ChartComponentProps {
  labels: string[];
  data: number[];
}

export default function ChartComponent({ labels, data }: ChartComponentProps) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<"line", number[], string> | null>(null);

  useEffect(() => {
    if (chartRef.current && chartInstance.current === null) {
      const chartConfig: ChartConfiguration<"line", number[], string> = {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "UV Index",
              data: data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          backgroundColor: "white",
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
