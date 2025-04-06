"use client"

import { useTransactions } from "@/context/TransactionContext"
import { BarChart, Bar, CartesianGrid, Tooltip, YAxis, ResponsiveContainer, Cell } from "recharts"

export function ExpenseChart() {
  const { transactions } = useTransactions()

  // Group totals by type
  const incomeTotal = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expenseTotal = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + Math.abs(t.amount), 0)

  // Final chart data
  const chartData = [
    { name: "Income", amount: incomeTotal },
    { name: "Expenses", amount: expenseTotal }
  ]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
        <YAxis
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, ""]}
          contentStyle={{
            borderRadius: "6px",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        />
        <Bar dataKey="amount" radius={[4, 4, 0, 0]}>
          <Cell fill="#10b981" /> {/* Green for Income */}
          <Cell fill="#f43f5e" /> {/* Red for Expenses */}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
