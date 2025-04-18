"use client"

import { useTransactions } from "@/context/TransactionContext"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const categoryColors = {
  housing: "#3b82f6",
  food: "#10b981",
  education: "#f59e0b",
  salary: "#8b5cf6",
  shopping: "#ec4899",
  healthcare: "#3b82f6",
  transportation: "#00b911",
  other: "#6b7280",
}

export function CategoryBreakdown() {
  const { transactions } = useTransactions()

  // Filter only expenses and group by category
  const categoryMap= {}

  transactions.forEach((t) => {
    if (t.type === "expense") {
      const category = t.category || "other"
      categoryMap[category] = (categoryMap[category] || 0) + Math.abs(t.amount)
    }
  })

  const chartData = Object.entries(categoryMap).map(([name, value]) => ({
    name,
    value,
    color: categoryColors[name] || "#9ca3af", // fallback gray
  }))

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={2}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [`$${value}`, "Amount"]}
            contentStyle={{
              borderRadius: "6px",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
