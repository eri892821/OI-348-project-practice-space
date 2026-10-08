import{useState} from 'react'
import axios from 'axios'

function Budgets(){
  const [budgets, setBudgets]=
  UseState([
    {id:1, category:"Food",
      Planned: 2000,
      Actual: 1500,
    },
    {id:2, category:"Transport",
    Planned: 2000,
      Actual: 1500,
    },

  ]);

  return(
  <div>
    <h1>Budgets</h1>
  </div>
);

}