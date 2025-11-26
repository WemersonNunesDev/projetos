'use client'
import Navbar from "@/components/Navbar";

export default function Home() {

  return (
    <div className="container mx-auto p-4">
      <Navbar 
        title={'Home'}
        description={'Pagina inicial para o teste de autenticação'}
      />
    </div>
  )
}
