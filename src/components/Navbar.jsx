import React from 'react'
import { AddTransactionDialog } from "@/components/add-transaction-dialog"
import { Button } from './ui/button'
import Link from 'next/link'
import { DollarSignIcon, SettingsIcon } from 'lucide-react'
import { logoutUser } from '@/firebase/authService'



function Navbar() {
  return (
    <div>
       <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-2 font-semibold">
            <DollarSignIcon className="h-6 w-6" />
            <span className="hidden sm:inline-block">Budget Tracker</span>
          </div>
          <nav className="ml-auto lg:flex items-center gap-4 lg:gap-6 hidden">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Dashboard</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/transactions">Transactions</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/budgets">Budgets</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/reports">Reports</Link>
            </Button>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon">
              <SettingsIcon className="h-4 w-4" />
              <span className="sr-only">Settings</span>
            </Button>
            <button
         onClick={()=>{logoutUser}}
         className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 font-semibold py-2 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-300">
         Logout
        </button>
            <AddTransactionDialog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar