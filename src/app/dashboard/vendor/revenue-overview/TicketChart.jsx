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
    },
    {
      name: "Sold",
      tickets: revenue.totalSold,
    },
  ];

  return (
    <div className="rounded-3xl border border-cyan-500/10 bg-[#111827]/70 p-6 backdrop-blur">
      <h2 className="mb-6 text-xl font-semibold text-white">
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
            fill="#06B6D4"
            radius={[10, 10, 0, 0]}
            maxBarSize={80}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketChart;