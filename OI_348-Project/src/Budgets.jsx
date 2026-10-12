import {useState} from 'react'
import {FaCar, FaShoppingCart, FaTv} from 'react-icons/fa'

function Budgets (){
  return (
    <div>
      <h1> Budgets</h1>

    <div style={{ display: 'flex', gap: 16 }} >
    <div style ={{background: '#e8eefc', color: '#0e63c5', padding: 16, width: 180}}>
    <p> Total Budgeted</p>
    <h2>R5000</h2>
    </div>

     <div style ={{background: '#e8eefc', color: '#0e63c5', padding: 16, width: 180}}>
    <p> Total Spent</p>
    <h2>R4860</h2>
    </div>
    
     <div style ={{background: '#e4771d', color: '#0e63c5', padding: 16, width: 180}}>
    <p> Over Spent</p>
    <h2>R80</h2>
    <p>Entertainment</p>
    </div>
 </div>
    
 <div style= {{marginTop:24}}>

   <table>
     <thead>
      <tr>
        <th>Category</th>
        <th>Target Amount</th>
        <th>Target Date</th>
        <th>Progress</th>
        <th>Spent</th> 
      </tr>
     </thead>

     <tbody>
       <tr>
        <td> <FaCar/>Transport</td>
        <td>R1500</td>
        <td> 30 Aug</td>
        <td>PROGRESS BAR</td>
        <td>R870</td>
       </tr>

       <tr>
        <td><FaShoppingCart/>Groceries</td>
        <td>R2500</td>
        <td>30 Aug</td>
        <td>PROGRESS BAR</td>
        <td>R2200</td>
       </tr>

        <tr>
        <td><FaTv/>Entertainment</td>
        <td>R500</td>
        <td>30 Aug</td>
        <td>PROGRESS BAR</td>
        <td>R580</td>
       </tr>
     </tbody>

   </table>
  </div>   
    
</div>



  )
}
export default Budgets