import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import HostTournamentPage from './pages/TournamentsPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Home/> */}
    {/* <HostTournamentPage/> */}
  </StrictMode>,
)
