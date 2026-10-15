import {useState} from 'react';
import { FaPiggyBank, FaEdit, FaTrash } from 'react-icons/fa'

const accountoptions=['Current Account', 'Savings', 'Credit Card', 'Cash']

function SavingGoals (){
  const[goals, setGoals] =useState ([
    {id:1, name:'New Laptop',accounts:['Savings']},
    {id:2, name:'Holiday',accounts:['Savings']},
    {id:3, name:'Sneakers',accounts:['Credit Card']},
  ])

  return (
    <div>
      <h1>Saving goals</h1>

      <div style={{ display: 'flex', gap: 16 }}>
        {goals.map((g) => (
          <div className="goal-card" key={g.id}>
            <div className="goal-top">
              <FaPiggyBank size={32} />
              <h3>{g.name}</h3>
              <FaEdit />
              <FaTrash />
            </div>
            <p>Linked accounts</p>
            {g.accounts.map((acc) => (
              <span className="pill" key={acc}>{acc}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SavingGoals