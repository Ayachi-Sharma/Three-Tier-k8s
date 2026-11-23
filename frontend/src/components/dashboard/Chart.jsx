import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

function BloodPressureChart({ history = [] }) {
  // Extract last 6 months of data and reverse to show oldest first (chronological)
  const last6Months = history.slice(0, 6).reverse();
  
  const labels = last6Months.map(item => {
    const shortMonth = item.month.substring(0, 3);
    return `${shortMonth}, ${item.year}`;
  });

  const systolicData = last6Months.map(item => item.blood_pressure.systolic.value);
  const diastolicData = last6Months.map(item => item.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        pointBorderColor: "#FFFFFF",
        pointBackgroundColor: "#E66FD2",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        pointBorderColor: "#FFFFFF",
        pointBackgroundColor: "#8C6FE6",
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Custom legends are rendered in JSX
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
        backgroundColor: "#072635",
        titleFont: { family: "Manrope", size: 12 },
        bodyFont: { family: "Manrope", size: 12 },
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
      },
      y: {
        min: 60,
        max: 180,
        ticks: {
          stepSize: 20,
          color: "#072635",
          font: {
            family: "Manrope",
            size: 12,
          },
        },
        grid: {
          color: "#E0E0E0",
          drawBorder: false,
        },
      },
    },
  };

  return (
    <div className="w-full min-h-[140px]">
      <Line data={data} options={options} />
    </div>
  );
}

export default BloodPressureChart;
