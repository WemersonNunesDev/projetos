import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Textalert from "@/components/Textalert";
// import Contato from "@/components/Contato";

export default function Home() {
  return (
    <div >
      <Navbar />
      <main className="w-4xl mx-auto">
        <section className="text-center text-gray-950 mt-4 mb-8">
          <h1 className="text-5xl font-semibold">Agenda</h1>
          <p className="my-3">Seus contatos estão abaixo</p>
          {/* <Textalert 
            text={'Nenhum contato cadastrado ainda'}
            color={'rose'}
          /> */}
        </section>

        <section>
          <table className="w-full table-auto">
            <tbody>
              {/* <Contato
                nome={'wemerson'}
                sobrenome={'nunes'}
                celular={'369845698712'}
                email={'nomealeatorio@email.com'}
              /> */}
            </tbody>
          </table>
        </section>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
