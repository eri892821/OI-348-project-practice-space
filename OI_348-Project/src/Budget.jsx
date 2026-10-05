import { useState } from 'react'

const categories = [
  { id: 1, name: 'Transport' },
  { id: 2, name: 'Groceries' },
  { id: 3, name: 'Entertainment' },
]

const initialBudgets = [
  { id: 1, categoryId: 1, limit: 1500, targetDate: '30 Aug', spent: 870 },
  { id: 2, categoryId: 2, limit: 2500, targetDate: '30 Aug', spent: 2200 },
  { id: 3, categoryId: 3, limit: 500, targetDate: '30 Aug', spent: 580 },
]

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-[#0e63c5] text-white antialiased p-6">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-white text-2xl font-bold">SpendWise</h2>
      </div>
      <nav className="flex flex-col gap-4">
        <div className="text-sm text-white/80">Dashboard</div>
        <div className="text-sm text-white/80">Accounts</div>
        <div className="text-sm text-white/80">Budgets</div>
        <div className="text-sm text-white/80">Saving goals</div>
        <div className="text-sm text-white/80">Categories</div>
      </nav>
    </div>
  )
}

const Budgets = () => {
  const [budgets] = useState(initialBudgets)

  const categoryName = (id) => categories.find((c) => c.id === id)?.name

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar />

      <div className="flex-1 p-6">
        <h1>Budgets</h1>

        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Target Amount</th>
              <th>Target Date</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((b) => (
              <tr key={b.id}>
                <td>{categoryName(b.categoryId)}</td>
                <td>R{b.limit}</td>
                <td>{b.targetDate}</td>
                <td>R{b.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Budgets