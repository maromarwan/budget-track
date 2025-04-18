"use client"
import {
  BarChart3Icon,
  HomeIcon,
  Trash,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import { useTransactions } from "@/context/TransactionContext"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/firebase/firebase"
import { deleteBudget } from "@/lib/budget-utils"

function Budget_status() {
    const [expenses, setExpenses] = useState([]);
    const {transactions,fetchBudgets,budgets} = useTransactions()



  useEffect(() => {
    fetchBudgets()
              // Fetch transactions from 'transactions' collection
              const fetchExpenses = () => {
                const expenseData = transactions.filter(tx => tx.amount < 0)
                setExpenses(expenseData)
            };

        fetchExpenses();
      }, []);

      useEffect(() => {
        if (transactions.length === 0) return;
      
        const expenseData = transactions.filter(tx => tx.amount < 0);
        setExpenses(expenseData);
        console.log(expenses);
      }, [transactions]);
      
      //delete budget
      const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this budget?")) {
          await deleteBudget(id)
          // Optional: refresh budgets from Firestore
          fetchBudgets();
        }
      }
  return (
    <div className="flex flex-col justify-between h-full">
                <CardContent>
                  <div className="space-y-4">
                    
                  {budgets.map((bdg) => {
                      const totalSpent = transactions
                        .filter((tx) => tx.category === bdg.category && tx.amount < 0)
                        .reduce((sum, tx) => sum + Math.abs(tx.amount), 0);
                    
                      const progress = (totalSpent / bdg.limit) * 100;
                    
                      return (
                        <div key={bdg.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <HomeIcon className="h-4 w-4 text-muted-foreground" />
                              <span className="text-sm font-medium">{bdg.category}</span>
                            </div>
                            <div className="text-sm flex gap-2">
                              ${totalSpent} / ${bdg.limit}
                              <Trash onClick={() => handleDelete(bdg.id)} className="cursor-pointer text-red-500 w-4" />
                            </div>
                          </div>
                          <Progress value={progress} className="h-2" />
                        </div>
                      );
                    })}

                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <BarChart3Icon className="mr-2 h-4 w-4" />
                    View All Budgets
                  </Button>
                </CardFooter>
    </div>
  )
}

export default Budget_status