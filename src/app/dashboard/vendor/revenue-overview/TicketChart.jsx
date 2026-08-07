"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TicketChart = ({ revenue }) => {
  const data = [
    {
      name: "Added",
      tickets: revenue.totalTicketsAdded,
      fill: "#06B6D4",
    },
    {
      name: "Available",
      tickets: revenue.totalAvailable,
      fill: "#10B981",
    },
    {
      name: "Sold",
      tickets: revenue.totalSold,
      fill: "#F59E0B",
    },
  ];


  return (
    <div className="rounded-3xl border border-cyan-500/10 bg-yellow-100 dark:bg-[#111827]/70 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold dark:text-white">
        Ticket Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={380}
      >
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 10,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="#2A3444"
          />

          <XAxis
            dataKey="name"
            stroke="#9CA3AF"
            tickLine={false}
          />

          <YAxis
            stroke="#9CA3AF"
            tickLine={false}
            axisLine={false}
          />

          <Tooltip
            cursor={{
              fill: "rgba(255,255,255,0.04)",
            }}
            contentStyle={{
              background: "#111827",
              border: "1px solid #22D3EE",
              borderRadius: "12px",
              color: "#fff",
            }}
          />

          <Bar
            dataKey="tickets"
            radius={[10, 10, 0, 0]}
            maxBarSize={80}
          >
            {data.map((entry) => (
              <rect key={entry.name} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketChart;