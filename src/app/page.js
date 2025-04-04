"use client"
import {
  ArrowDownIcon,
  ArrowUpIcon,
  BarChart3Icon,
  CreditCardIcon,
  DollarSignIcon,
  HomeIcon,
  LayersIcon,
  PieChartIcon,
  UsersIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpenseChart } from "@/components/expense-chart"
import { RecentTransactions } from "@/components/recent-transactions"
import { CategoryBreakdown } from "@/components/category-breakdown"
import { useTransactions } from "@/context/TransactionContext"

export default function DashboardPage() {
  const {transactions} = useTransactions()
  console.log(transactions);
  


  
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1 space-y-6 p-6 md:p-8">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <Tabs defaultValue="overview" className="space-y-6 w-full">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                  <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${transactions.reduce((sum, txn) => sum + Number(txn.amount), 0)}</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Income</CardTitle>
                  <ArrowUpIcon className="h-4 w-4 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,452.00</div>
                  <p className="text-xs text-muted-foreground">+8.2% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                  <ArrowDownIcon className="h-4 w-4 text-rose-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,789.34</div>
                  <p className="text-xs text-muted-foreground">+12.3% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
                  <PieChartIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">48.2%</div>
                  <p className="text-xs text-muted-foreground">+2.5% from last month</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Monthly Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <ExpenseChart />
                </CardContent>
              </Card>
              <Card className="md:col-span-3 col-span-4">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>You made 12 transactions this month.</CardDescription>
                </CardHeader>
                <CardContent>
                {transactions.length === 0 ? (
          <p className="text-muted-foreground">No transactions yet.</p>
        ) : (
                  <RecentTransactions transactions={transactions}/>)}
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="md:col-span-3 col-span-4">
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                  <CardDescription>Your spending by category this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CategoryBreakdown />
                </CardContent>
              </Card>
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Budget Status</CardTitle>
                  <CardDescription>Your budget progress for this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <HomeIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Housing</span>
                        </div>
                        <div className="text-sm">$850 / $1,000</div>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CreditCardIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Shopping</span>
                        </div>
                        <div className="text-sm">$320 / $400</div>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <UsersIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Entertainment</span>
                        </div>
                        <div className="text-sm">$175 / $200</div>
                      </div>
                      <Progress value={87.5} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <LayersIcon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm font-medium">Groceries</span>
                        </div>
                        <div className="text-sm">$290 / $350</div>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <BarChart3Icon className="mr-2 h-4 w-4" />
                    View All Budgets
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Spending Trends</CardTitle>
                  <CardDescription>Your spending patterns over the last 6 months.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Spending trends chart will appear here
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Savings Growth</CardTitle>
                  <CardDescription>Your savings growth over time.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                    Savings growth chart will appear here
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
