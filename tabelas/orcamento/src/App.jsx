import './App.css'
import FormOrcamento from './assets/components/FormOrcamento'

function App() {

  return (
    <div className='container mx-auto p-4'>
      <main>
        <article>
          <h1 className='text-4xl'>Orçamento de materiais</h1>
          <FormOrcamento />
        </article>
      </main>
    </div>
  )
}

export default App
