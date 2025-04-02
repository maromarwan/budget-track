import React from 'react'
import { AddTransactionDialog } from "@/components/add-transaction-dialog"
import { Button } from './ui/button'
import Link from 'next/link'
import { DollarSignIcon, SettingsIcon } from 'lucide-react'


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
            <AddTransactionDialog />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar