import {useState} from 'react'

const categories = [
  { id: 1, name: 'Salary', type: 'income' },
  { id: 2, name: 'Groceries', type: 'expense' },
  { id: 3, name: 'Transport', type: 'expense' },
]

const transactions = [
  { id: 1, date: '2026-09-03', amount: 850, accountId: 1, categoryId: 2, description: 'Weekly shop' },
  { id: 2, date: '2026-09-05', amount: 400, accountId: 1, categoryId: 3, description: 'Fuel' },
]

const initialBudgets = [
  { id: 1, categoryId: 2, month: '2026-09', limit: 3000 },
]

const Budgets = () => {
  const [budgets, setBudgets] = useState(initialBudgets)

  const [categoryId, setCategoryId] = useState('')
  const [month, setMonth] = useState('')
  const [limit, setLimit] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBudget = {
      id: Date.now(),
      categoryId: Number(categoryId),
      month,
      limit: Number(limit),
    }
    setBudgets(budgets.concat(newBudget))
    setCategoryId('')
    setMonth('')
    setLimit('')
  }

  const handleDelete = (id) => {
    setBudgets(budgets.filter((b) => b.id !== id))
  }

  const categoryName = (id) => categories.find((c) => c.id === id)?.name

  const spentFor = (budget) =>
    transactions
      .filter((t) => t.categoryId === budget.categoryId && t.date.startsWith(budget.month))
      .reduce((sum, t) => sum + t.amount, 0)

  return (
    <div>
      <h1>Budgets</h1>

      <form onSubmit={handleSubmit}>
        <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
          <option value="">Category</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>
        <input type="month" value={month} onChange={(e) => setMonth(e.target.value)} required />
        <input
          type="number"
          placeholder="Limit"
          value={limit}
          onChange={(e) => setLimit(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>

      <table>
        <thead>
          <tr><th>Category</th><th>Month</th><th>Target</th><th>Spent</th><th></th></tr>
        </thead>
        <tbody>
          {budgets.map((b) => (
            <tr key={b.id}>
              <td>{categoryName(b.categoryId)}</td>
              <td>{b.month}</td>
              <td>R{b.limit}</td>
              <td>R{spentFor(b)}</td>
              <td><button onClick={() => handleDelete(b.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Budgets