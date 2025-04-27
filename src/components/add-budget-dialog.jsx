"use client"

import { useState } from "react"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select"
import { useTransactions } from "@/context/TransactionContext"
import { addBudget } from "@/lib/budget-utils"
import { getAuth } from "firebase/auth";


const categories = [
  { label: "Housing", value: "housing" },
  { label: "Transportation", value: "transportation" },
  { label: "Food", value: "food" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Shopping", value: "shopping" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
  { label: "Salary", value: "salary" },
  { label: "Other", value: "other" },
]

export function AddBudgetDialog({ onAdd }) {
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState("")
  const [limit, setLimit] = useState("")
  const {fetchBudgets} = useTransactions()

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async () => {
    if (!category || !limit) return
    await addBudget(category, limit, user)
    setCategory("")
    setLimit("")
    setOpen(false)
    if (onAdd) onAdd()
    fetchBudgets(user)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">+ Add New Budget</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Budget Limit</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Select onValueChange={setCategory} value={category}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            placeholder="Limit Amount"
            type="number"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>Add Budget</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
