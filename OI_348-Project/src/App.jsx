import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import './App.css'

import spendwiseLogo from './assets/Gemini_Generated_Image.jfif'
import budgetImg from './assets/Gemini_Generated_Image_7dvgog7dvgog7dvg.jpg'
import dashboardImg from './assets/Gemini_Generated_Image_27pdd327pdd327pd.jpg'
import savingGoalsImg from './assets/Gemini_Generated_Image_59avso59avso59av.jpg'

import Dashboard from './Dashboard'
import Budgets from './Budgets'
import SavingGoals from './SavingGoals'

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 text-sm hover:text-white transition-colors ${
    isActive ? 'text-white font-bold' : 'text-white/80'
  }`

const Sidebar = () => (
  <div className="w-64 min-h-screen bg-[#0e63c5] text-white antialiased p-6">
    <div className="flex items-center gap-3 mb-8">
      <img src={spendwiseLogo} alt="SpendWise Logo" className="w-10 h-10 object-cover rounded-md" />
      <h2 className="!text-3xl !font-bold">SpendWise</h2>
    </div>

    <nav className="flex flex-col gap-4">
      <NavLink to="/" end className={linkClass}>
        <img src={dashboardImg} alt="Dashboard" className="w-8 h-8 object-cover rounded-md" />
        Dashboard
      </NavLink>
      <NavLink to="/budgets" className={linkClass}>
        <img src={budgetImg} alt="Budgets" className="w-8 h-8 object-cover rounded-md" />
        Budgets
      </NavLink>
      <NavLink to="/goals" className={linkClass}>
        <img src={savingGoalsImg} alt="Saving goals" className="w-8 h-8 object-cover rounded-md" />
        Saving goals
      </NavLink>
    </nav>
  </div>
)

const Layout = () => (
  <div className="flex min-h-screen w-screen m-0 p-0">
    <Sidebar />
    <main className="flex-1 bg-[#282828] min-h-screen text-white p-8">
      <Outlet />
    </main>
  </div>
)

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="budgets" element={<Budget />} />
      <Route path="goals" element={<SavingGoals />} />
    </Route>
  </Routes>
)

export default App