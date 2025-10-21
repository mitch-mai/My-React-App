import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';

export default function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold">Welcome Homepage</h1>
        <Button onClick={handleClick}>Click Me</Button>
      </main>

      <Footer />
    </div>
  );
}
