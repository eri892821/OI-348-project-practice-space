import { useState } from 'react'
import { FaCar, FaShoppingCart, FaTv } from 'react-icons/fa'

const icons = {
  Transport: <FaCar />,
  Groceries: <FaShoppingCart />,
  Entertainment: <FaTv />,
}

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

    const formattedDate = new Date(date).toLocaleDateString('en-ZA', {
      day: 'numeric',
      month: 'short',
    })

    const newBudget = {
      id: Date.now(),
      category: category,
      target: Number(target),
      date: formattedDate,
      spent: 0,
    }

    setBudgets(budgets.concat(newBudget))
    setCategory('')
    setTarget('')
    setDate('')
  }

  const totalBudgeted = budgets.reduce((sum, b) => sum + b.target, 0)
  const totalSpent = budgets.reduce((sum, b) => sum + b.spent, 0)

  const overBudgets = budgets.filter((b) => b.spent > b.target)
  const worstBudget = overBudgets.sort(
    (a, b) => b.spent - b.target - (a.spent - a.target)
  )[0]

  const inputStyle =
    'w-full bg-[#282828] border border-zinc-700 rounded-lg p-2.5 text-sm text-white focus:outline-none focus:border-blue-500'

  return (
    <div>
      <h2 className="!text-5xl !font-bold mb-6">Budgets</h2>

      <div className="flex flex-row gap-6">
        <div className="bg-[#eef2f9] p-5 rounded-2xl shadow-sm w-64">
          <p className="text-sm font-medium text-[#1d5bb4]">Total budgeted</p>
          <h3 className="text-2xl font-bold text-[#0c3162] mt-1">
            R{totalBudgeted.toLocaleString()}
          </h3>
        </div>

        <div className="bg-[#eef2f9] p-5 rounded-2xl shadow-sm w-64">
          <p className="text-sm font-medium text-[#1d5bb4]">Total spent</p>
          <h3 className="text-2xl font-bold text-[#0c3162] mt-1">
            R{totalSpent.toLocaleString()}
          </h3>
        </div>

        {worstBudget && (
          <div className="bg-[#e4771d] p-5 rounded-2xl shadow-sm w-64">
            <p className="text-sm font-medium text-[#0c3162]">Over spent</p>
            <h3 className="text-2xl font-bold text-[#0c3162] mt-1">
              R{(worstBudget.spent - worstBudget.target).toLocaleString()}
            </h3>
            <p className="text-sm font-medium text-[#0c3162]">{worstBudget.category}</p>
          </div>
        )}
      </div>

      <div className="bg-[#1f1f1f] text-white p-6 rounded-2xl shadow-lg border border-zinc-800 mt-6 w-full max-w-4xl">
        <div className="grid grid-cols-5 items-center py-3 border-b border-zinc-700 text-lg text-zinc-300">
          <span>Category</span>
          <span>Target amount</span>
          <span>Target date</span>
          <span>Progress</span>
          <span className="text-right">Spent</span>
        </div>

        {budgets.map((b) => (
          <div
            key={b.id}
            className="grid grid-cols-5 items-center py-3 border-b border-zinc-800/60 text-zinc-300"
          >
            <span className="flex items-center gap-3 font-medium text-white">
              <span className="text-[#1d5bb4]">{icons[b.category]}</span>
              {b.category}
            </span>
            <span>R{b.target.toLocaleString()}</span>
            <span>{b.date}</span>

            <div className="bg-zinc-600 h-2 w-36 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${
                  b.spent > b.target ? 'bg-red-600' : 'bg-blue-600'
                }`}
                style={{ width: `${Math.min((b.spent / b.target) * 100, 100)}%` }}
              />
            </div>

            <span className="text-right">R{b.spent.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="bg-[#1f1f1f] text-white p-6 rounded-2xl shadow-lg border border-zinc-800 mt-6 w-full max-w-4xl">
        <h3 className="text-lg font-bold mb-4">Create a new budget</h3>

        <form onSubmit={handleSubmit} className="flex flex-row items-end gap-4">
          <div className="flex-1">
            <label className="block text-zinc-400 mb-1">Category</label>
            <select
              className={inputStyle}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="Transport">Transport</option>
              <option value="Groceries">Groceries</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-zinc-400 mb-1">Target amount</label>
            <input
              type="number"
              placeholder="R 0.00"
              className={inputStyle}
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              required
            />
          </div>

          <div className="flex-1">
            <label className="block text-zinc-400 mb-1">Target date</label>
            <input
              type="date"
              className={inputStyle}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-colors"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  )
}

export default Budgets
