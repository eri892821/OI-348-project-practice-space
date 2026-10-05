import {useState} from 'react'
const categories = [
  { id: 1, name: 'Transport', type: 'expense' },
  { id: 2, name: 'Groceries', type: 'expense' },
  { id: 3, name: 'Entertainment', type: 'expense' },
]

const transactions = [
  { id: 1, date: '2026-08-10', amount: 870, accountId: 1, categoryId: 1, description: 'Fuel' },
  { id: 2, date: '2026-08-12', amount: 2200, accountId: 1, categoryId: 2, description: 'Groceries' },
  { id: 3, date: '2026-08-15', amount: 580, accountId: 1, categoryId: 3, description: 'Movies' },
]

const initialBudgets = [
  { id: 1, categoryId: 1, month: '2026-08', limit: 1500, targetDate: '30 Aug' },
  { id: 2, categoryId: 2, month: '2026-08', limit: 2500, targetDate: '30 Aug' },
  { id: 3, categoryId: 3, month: '2026-08', limit: 500, targetDate: '30 Aug' },
]

const Budgets = () => {
  const [budgets, setBudgets] = useState(initialBudgets)
  const [categoryId, setCategoryId] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBudget = {
      id: Date.now(),
      categoryId: Number(categoryId),
      month: '2026-08',
      limit: Number(amount),
      targetDate: date,
    }
    setBudgets(budgets.concat(newBudget))
    setCategoryId('')
    setAmount('')
    setDate('')
  }

  const categoryName = (id) => categories.find((c) => c.id === id)?.name

  const spentFor = (budget) =>
    transactions
      .filter((t) => t.categoryId === budget.categoryId)
      .reduce((sum, t) => sum + t.amount, 0)

  const totalBudgeted = budgets.reduce((sum, b) => sum + b.limit, 0)
  const totalSpent = budgets.reduce((sum, b) => sum + spentFor(b), 0)
  const overspentOne = budgets.find((b) => spentFor(b) > b.limit)

  return (
    <div style={{ display: 'flex', fontFamily: 'sans-serif' }}>

      {/* SIDEBAR */}
      <div style={{ background: '#1d4ed8', width: 220, minHeight: '100vh', padding: 16, color: 'white' }}>
        <h2>💙 SpendWise</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 24 }}>
          <a href="#" style={{ color: 'white', padding: 10 }}>Dashboard</a>
          <a href="#" style={{ color: 'white', padding: 10 }}>Accounts</a>
          <a href="#" style={{ color: 'white', padding: 10, background: 'rgba(255,255,255,0.15)', borderRadius: 6 }}>Budgets</a>
          <a href="#" style={{ color: 'white', padding: 10 }}>Saving goals</a>
          <a href="#" style={{ color: 'white', padding: 10 }}>Categories</a>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ background: '#15202b', color: 'white', padding: 24, flex: 1 }}>
        <h1>Budgets</h1>

        {/* SUMMARY CARDS */}
        <div style={{ display: 'flex', gap: 16, margin: '16px 0' }}>
          <div style={{ background: '#1e293b', padding: 16, borderRadius: 8 }}>
            <p>Total budgeted</p>
            <h2>R{totalBudgeted}</h2>
          </div>
          <div style={{ background: '#1e293b', padding: 16, borderRadius: 8 }}>
            <p>Total spent</p>
            <h2>R{totalSpent}</h2>
          </div>
          {overspentOne && (
            <div style={{ background: '#d98a2b', padding: 16, borderRadius: 8 }}>
              <p>Over spent</p>
              <h2>R{spentFor(overspentOne) - overspentOne.limit}</h2>
              <p>{categoryName(overspentOne.categoryId)}</p>
            </div>
          )}
        </div>

        {/* TABLE */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', color: '#94a3b8' }}>
              <th>Category</th>
              <th>Target amount</th>
              <th>Target date</th>
              <th>Progress</th>
              <th>Spent</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((b) => {
              const spent = spentFor(b)
              const percent = Math.min((spent / b.limit) * 100, 100)
              const over = spent > b.limit
              return (
                <tr key={b.id} style={{ borderTop: '1px solid #334155' }}>
                  <td style={{ padding: '10px 0' }}>{categoryName(b.categoryId)}</td>
                  <td>R{b.limit}</td>
                  <td>{b.targetDate}</td>
                  <td>
                    <div style={{ background: '#334155', borderRadius: 4, height: 8, width: 150 }}>
                      <div style={{
                        width: `${percent}%`,
                        background: over ? '#e05d3c' : '#3b82f6',
                        height: '100%',
                        borderRadius: 4,
                      }} />
                    </div>
                  </td>
                  <td style={{ color: over ? '#e05d3c' : 'white' }}>R{spent}</td>
                </tr>
              )
            })}
          </tbody>
        </table>

        {/* CREATE FORM */}
        <div style={{ background: '#1e293b', padding: 16, borderRadius: 8, marginTop: 24 }}>
          <h3>Create a new budget</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 16, alignItems: 'end' }}>
            <div>
              <label>Category</label><br />
              <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                <option value="">Select category</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label>Target amount</label><br />
              <input type="number" placeholder="R 0.00" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div>
              <label>Target date</label><br />
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Budgets
