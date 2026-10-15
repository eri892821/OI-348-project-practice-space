import {useState} from 'react';

const accountoptions=['Current Account', 'Savings', 'Credit Card', 'Cash']

function SavingsGoals (){
  const[goals, setGoals] =useState ([
    {id:1, name:'New Laptop',accounts:['Savings']},
    {id:2, name:'Holiday',accounts:['Savings']},
    {id:3, name:'Sneakers',accounts:['Credit Card']},
  ])

 // Form memory: the typed name, the chosen accounts, and which goal is being edited
  const [name, setName] = useState('')
  const [selected, setSelected] = useState([])
  const [editingId, setEditingId] = useState(null)

  // Click an account pill: add it if missing, remove it if already chosen
  const toggleAccount = (acc) => {
    if (selected.includes(acc)) {
      setSelected(selected.filter((a) => a !== acc))
    } else {
      setSelected(selected.concat(acc))
    }
  }

  // Runs when Create / Save is clicked
  const handleSubmit = (event) => {
    event.preventDefault() // stop the page reloading
    if (selected.length === 0) return // need at least one account

    if (editingId) {
      // Editing: replace the matching goal's name and accounts
      setGoals(goals.map((g) =>
        g.id === editingId ? { ...g, name: name, accounts: selected } : g
      ))
    } else {
      // Creating: add a new goal to the list
      setGoals(goals.concat({ id: Date.now(), name: name, accounts: selected }))
    }
    setName('')
    setSelected([])
    setEditingId(null)
  }

  // Edit icon: copy the goal's values into the form
  const startEdit = (goal) => {
    setEditingId(goal.id)
    setName(goal.name)
    setSelected(goal.accounts)
  }

  // Delete icon: keep every goal except this one
  const handleDelete = (id) => {
    setGoals(goals.filter((g) => g.id !== id))
  }

  return (
    <div className="budgets-page">
      <h1>Saving goals</h1>

      {/* GOAL CARDS: one dark card per goal */}
      <div className="goal-cards">
        {goals.map((g) => (
          <div className="goal-card" key={g.id}>
            {/* Top row: piggy icon, name, edit and delete icons */}
            <div className="goal-top">
              <FaPiggyBank size={32} />
              <h3>{g.name}</h3>
              <button className="icon-btn" onClick={() => startEdit(g)}>
                <FaEdit />
              </button>
              <button className="icon-btn" onClick={() => handleDelete(g.id)}>
                <FaTrash />
              </button>
            </div>

            <p className="goal-label">Linked accounts</p>

            {/* One pill per linked account */}
            <div className="pill-row">
              {g.accounts.map((acc) => (
                <span className="pill" key={acc}>{acc}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FORM BOX */}
      <div className="form-box">
        <h3>{editingId ? 'Edit saving goal' : 'Create a new saving goal'}</h3>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Goal name</label>
            <input
              placeholder="e.g. New Laptop"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label>Link accounts</label>
            {/* Click one or more pills to choose accounts */}
            <div className="pill-row">
              {accountOptions.map((acc) => (
                <button
                  type="button"
                  key={acc}
                  className={selected.includes(acc) ? 'pill-option chosen' : 'pill-option'}
                  onClick={() => toggleAccount(acc)}
                >
                  {acc}
                </button>
              ))}
            </div>
          </div>

          <button type="submit">{editingId ? 'Save' : 'Create'}</button>
        </form>
      </div>
    </div>
  )
}

export default SavingGoals