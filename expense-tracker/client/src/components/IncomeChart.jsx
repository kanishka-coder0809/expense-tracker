import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement);

const IncomeChart = ({ incomeData }) => {
  const grouped = incomeData.reduce((acc, item) => {
    const date = item.date;
    acc[date] = (acc[date] || 0) + item.amount;
    return acc;
  }, {});

  const labels = Object.keys(grouped);
  const data = Object.values(grouped);

  return (
    <div style={{ width: "100%", height: "300px" }}>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "Income",
              data,
              backgroundColor: "rgba(99, 102, 241, 0.8)",
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default IncomeChart;
