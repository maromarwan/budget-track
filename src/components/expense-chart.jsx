"use client"

// import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan",
    income: 2400,
    expenses: 1800,
  },
  {
    name: "Feb",
    income: 2210,
    expenses: 1600,
  },
  {
    name: "Mar",
    income: 2800,
    expenses: 2100,
  },
  {
    name: "Apr",
    income: 2700,
    expenses: 1900,
  },
  {
    name: "May",
    income: 3100,
    expenses: 2300,
  },
  {
    name: "Jun",
    income: 3452,
    expenses: 1789,
  },
]

export function ExpenseChart() {
  // const { theme } = useTheme()
  // const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        {/* <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} stroke={isDark ? "#888888" : "#666666"} /> */}
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
          // stroke={isDark ? "#888888" : "#666666"}
        />
        <Tooltip
          contentStyle={{
            // backgroundColor: isDark ? "#1f2937" : "#ffffff",
            // borderColor: isDark ? "#374151" : "#e5e7eb",
            borderRadius: "6px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
          formatter={(value) => [`$${value}`, ""]}
        />
        <Bar dataKey="income" fill="#10b981" radius={[4, 4, 0, 0]} name="Income" />
        <Bar dataKey="expenses" fill="#f43f5e" radius={[4, 4, 0, 0]} name="Expenses" />
      </BarChart>
    </ResponsiveContainer>
  )
}

