import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 pt-16">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <AppRouter />
        </div>
      </div>
    </BrowserRouter>
  )
}
