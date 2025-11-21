import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import FindItem from "./component/FindItem";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session ? (
        <div className="p-4">
          <h1 className="text-3xl">Bem-vindo, {session.user.email}!</h1>
        </div>
      ) : (
        <div>
          <Navbar />
          <main className="lg:w-5xl mx-auto p-4">
            <PageHeader
              title={'Agenda'}
              description={'Seus contatos estão listados abaixo'}
            />
            <section className="my-8">
              <FindItem />
            </section>
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}
