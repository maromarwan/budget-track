import { ArrowUpIcon, CreditCardIcon, HomeIcon, ShoppingBagIcon, UtensilsIcon } from "lucide-react"

const transactions = [
  {
    id: "1",
    description: "Grocery Store",
    amount: -85.32,
    date: "Today",
    icon: ShoppingBagIcon,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    id: "2",
    description: "Monthly Salary",
    amount: 3452.0,
    date: "Yesterday",
    icon: ArrowUpIcon,
    iconColor: "text-emerald-500",
    iconBg: "bg-emerald-100",
  },
  {
    id: "3",
    description: "Restaurant Bill",
    amount: -42.5,
    date: "Yesterday",
    icon: UtensilsIcon,
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
  },
  {
    id: "4",
    description: "Rent Payment",
    amount: -850.0,
    date: "Mar 1",
    icon: HomeIcon,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-100",
  },
  {
    id: "5",
    description: "Online Shopping",
    amount: -124.99,
    date: "Feb 28",
    icon: CreditCardIcon,
    iconColor: "text-purple-500",
    iconBg: "bg-purple-100",
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center gap-4">
          <div className={`p-2 rounded-full ${transaction.iconBg}`}>
            <transaction.icon className={`h-4 w-4 ${transaction.iconColor}`} />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.description}</p>
            <p className="text-xs text-muted-foreground">{transaction.date}</p>
          </div>
          <div className={`text-sm font-medium ${transaction.amount > 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
           {transaction.amount > 0 ? "+" : ""}
            {transaction.amount.toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

