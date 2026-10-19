import {BrowserRouter,Routes, Route,NavLink,Outlet} from 'react-router-dom'

import {useState} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import spendwiseLogo from './assets/Gemini_Generated_Image.jfif'
import categories from './assets/Gemini_Generated_Image_r5byi0r5byi0r5by.jpg'
import budget from './assets/Gemini_Generated_Image_7dvgog7dvgog7dvg.jpg'
import dashboardLogo from './assets/Gemini_Generated_Image_27pdd327pdd327pd.jpg'
import savingGoals from './assets/Gemini_Generated_Image_59avso59avso59av.jpg'
import accounts from './assets/Gemini_Generated_Image_ov0r71ov0r71ov0r.jpg'
import savings from './assets/Gemini_Generated_Image_u9cddpu9cddpu9cd.jpeg'
import credit from './assets/Gemini_Generated_Image_sq2pjesq2pjesq2p.jpeg'

import Dashboard from './Dashboard'
import SavingGoals from './SavingGoals'

// Sidebar (the NavBar): each NavLink changes the address, which changes the page
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
        <img src={dashboardLogo} alt="Dashboard logo" className="w-8 h-8 object-cover rounded-md" />
        Dashboard
      </NavLink>
      <NavLink to="/accounts" className={linkClass}>
        <img src={accounts} alt="Accounts logo" className="w-8 h-8 object-cover rounded-md" />
        Accounts
      </NavLink>
      <NavLink to="/budgets" className={linkClass}>
        <img src={budget} alt="Budget logo" className="w-8 h-8 object-cover rounded-md" />
        Budgets
      </NavLink>
      <NavLink to="/goals" className={linkClass}>
        <img src={savingGoals} alt="Saving goals logo" className="w-8 h-8 object-cover rounded-md" />
        Saving goals
      </NavLink>
      <NavLink to="/categories" className={linkClass}>
        <img src={categories} alt="Categories logo" className="w-8 h-8 object-cover rounded-md" />
        Categories
      </NavLink>
    </nav>
  </div>
)

// Layout route: the sidebar and grey area stay put; <Outlet /> is where the chosen page appears
const Layout = () => (
  <div className="flex min-h-screen w-screen m-0 p-0">
    <Sidebar />
    <main className="flex-1 bg-[#282828] min-h-screen text-white p-8">
      <Outlet />
    </main>
  </div>
)

// Placeholder pages until yours are built
const Accounts = () => <h2 className="!text-5xl !font-bold">Accounts</h2>
const Budgets = () => <h2 className="!text-5xl !font-bold">Budgets</h2>
const Categories = () => <h2 className="!text-5xl !font-bold">Categories</h2>

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="budgets" element={<Budgets />} />
        <Route path="goals" element={<SavingGoals />} />
        <Route path="categories" element={<Categories />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default App