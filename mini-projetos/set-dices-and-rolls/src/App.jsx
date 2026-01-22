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
          <ul className='flex justify-center gap-8 mt-8 text-lg font-medium'>
            <li>
              <Card 
                title='Criar Personagem' 
                description='Crie seus personagens aqui.' 
              />
            </li>

            <li>
              Rolagens
            </li>

            <li>
              Gerenciar inventário
            </li>
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
