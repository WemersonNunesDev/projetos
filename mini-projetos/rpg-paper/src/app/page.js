import Navbar from './components/Navbar';
import Container from './components/Container';

export default function Home() {
  return (
    <div className='container mx-auto p-4'>
      <Navbar titlePage='Home'/>
      <Container />
    </div>
  );
}
