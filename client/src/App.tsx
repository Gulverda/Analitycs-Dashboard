import './App.css'
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Reports from './pages/reports';
import Settings from './pages/settings';
import MainLayout from './layouts/mainLayout';

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainLayout>
  )
}

export default App
