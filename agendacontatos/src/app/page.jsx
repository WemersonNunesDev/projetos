import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import Msgbox from "@/components/Msgbox";
import ItemTable from "@/components/ItemTable";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="lg:w-5xl mx-auto p-4">
        <PageHeader 
          title={'Contatos'}
          description={'Seus contatos estão listados abaixo'}
        />
        <Msgbox text={'Nenhum contato cadastrado ainda!'} styleMsg={'alert'}/>

        <section className="my-8">
          <table className="w-full">
            <tbody>
              <ItemTable 
                name={'wemerson'}
                secondName={'nunes'}
                phone={'22999999999'}
                email={'wemersonopereira@gmail.com'}
              />
            </tbody>
          </table>
        </section>
      </main>
      <Footer />
    </div>
  );
}
