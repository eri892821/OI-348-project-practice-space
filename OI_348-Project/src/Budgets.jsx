function Budgets() {
  const [budgets, setBudgets] = useState([
    { id: 1, category: 'Transport', target: 1500, date: '30 Aug', spent: 870 },
    { id: 2, category: 'Groceries', target: 2500, date: '30 Aug', spent: 2200 },
    { id: 3, category: 'Entertainment', target: 500, date: '30 Aug', spent: 580 },
  ])

  const [category, setCategory] = useState('')
  const [target, setTarget] = useState('')
  const [date, setDate] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const newBudget = {
      id: Date.now(),
      category: category,
      target: Number(target),
      date: date,
      spent: 0,
    }
    setBudgets(budgets.concat(newBudget))
    setCategory('')
    setTarget('')
    setDate('')
  }

  return (
    <div className="bg-[#2b2b2b] text-white min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Budgets</h1>

      {/* Cards */}
      <div className="flex gap-4">
        <div className="w-44 p-4 rounded-xl bg-[#e8eefc] text-[#0e63c5]">
          <p>Total Budgeted</p>
          <h2 className="text-2xl font-bold">R5000</h2>
        </div>
        <div className="w-44 p-4 rounded-xl bg-[#e8eefc] text-[#0e63c5]">
          <p>Total Spent</p>
          <h2 className="text-2xl font-bold">R4860</h2>
        </div>
        <div className="w-44 p-4 rounded-xl bg-[#e4771d] text-[#0e63c5]">
          <p>Over Spent</p>
          <h2 className="text-2xl font-bold">R80</h2>
          <p>Entertainment</p>
        </div>
      </div>

      {/* Table box */}
      <div className="mt-6 bg-black rounded-xl p-6">
        <table className="w-full text-left">
          <thead>
            <tr>
              <th className="p-3">Category</th>
              <th className="p-3">Target Amount</th>
              <th className="p-3">Target Date</th>
              <th className="p-3">Progress</th>
              <th className="p-3">Spent</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((b) => (
              <tr key={b.id} className="border-t border-neutral-800">
                <td className="p-3 flex items-center gap-2">{icons[b.category]}{b.category}</td>
                <td className="p-3">R{b.target}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">
                  <div className="w-36 h-2 bg-gray-300 rounded">
                    <div
                      className={`h-full rounded ${b.spent > b.target ? 'bg-red-500' : 'bg-[#0e63c5]'}`}
                      style={{ width: `${Math.min((b.spent / b.target) * 100, 100)}%` }}
                    />
                  </div>
                </td>
                <td className="p-3">R{b.spent}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Form box */}
      <div className="mt-6 bg-black rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">Create a new budget</h3>
        <form onSubmit={handleSubmit} className="flex gap-4 items-center">
          <select
            className="text-black px-2 py-1 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select category</option>
            <option value="Transport">Transport</option>
            <option value="Groceries">Groceries</option>
            <option value="Entertainment">Entertainment</option>
          </select>

          <input
            className="text-black px-2 py-1 rounded"
            type="number"
            placeholder="R 0.00"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
            required
          />

          <input
            className="text-black px-2 py-1 rounded"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <button type="submit" className="bg-[#0e63c5] text-white px-4 py-1 rounded">
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default Budgets