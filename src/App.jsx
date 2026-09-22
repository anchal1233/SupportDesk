import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import MobileHeader from './components/layout/MobileHeader'
import Dashboard from './pages/Dashboard'

export default function App() {
  return (
    <div className="flex h-screen bg-canvas">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <MobileHeader />
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tickets" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
