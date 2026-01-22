import './App.css'
import { Card } from './components/Card.jsx'

function App() {

  return (
    <>
      <header className='border-b-2 border-indigo-600 py-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>
              Bem Vindo ao <span className='text-indigo-600 font-bold'>Dice&Rolls</span>
          </h1>
          <p className='text-sm'>Desenvolvido exclusivamente para jogadores de Tormenta20. Não oficial.</p>
        </div>
      </header>
      <main>
        <section>
          <ul className='flex flex-col gap-6 mt-8 text-lg font-medium'>
            <li>
              <Card 
                title='Criar Personagem' 
                description='Crie seus personagens.' 
              />
            </li>

            <li>
              <Card
                title='Rolagens'
                description='Confira suas rolagens.'
              />
            </li>

            <li>
              <Card 
                title='Itens'
                description='Gerencie seus itens.'
                route='/itens'
              />
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
