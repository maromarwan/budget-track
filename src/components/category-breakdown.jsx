"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Housing", value: 850, color: "#3b82f6" },
  { name: "Food", value: 290, color: "#10b981" },
  { name: "Transportation", value: 175, color: "#f59e0b" },
  { name: "Entertainment", value: 175, color: "#8b5cf6" },
  { name: "Shopping", value: 320, color: "#ec4899" },
  { name: "Other", value: 150, color: "#6b7280" },
]

export function CategoryBreakdown() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`$${value}`, "Amount"]}
            contentStyle={{
              borderRadius: "6px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

