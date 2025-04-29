import './App.css'
import Pages from './pages/Pages';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container" style={{ backgroundColor: '#f0f8ff', padding: '20px' }}> 
      <h1 style={{ color: '#333', textAlign: 'center' }}>Welcome to Recipe App (Docker Test)</h1>
      <Pages />
    </div>
  )
}

export default App
