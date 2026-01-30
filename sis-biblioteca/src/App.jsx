import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='container mx-auto p-4'>
      <Navbar />
      <main className='bg-indigo-100'>
        <h1 className='text-4xl font-semibold text-gray-950'>Biblioteca Digital</h1>
      </main>
    </div>
  )
}

export default App
