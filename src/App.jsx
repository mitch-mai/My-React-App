import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Buttons/Button';
import CounterButton from './components/Buttons/CounterButton';
import HoverButton from './components/Buttons/HoverButton';

export default function App() {
  const handleClick = () => {
    alert('Basic button clicked!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* main content area */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Welcome Page</h1>

        {/* Button row */}
        <div className="flex items-center justify-center gap-6">
          {/* Basic button (center) */}
          <Button onClick={handleClick}>Bonk</Button>

          {/* Counter button (side) */}
          <CounterButton />

          {/* Hover button (side) */}
          <HoverButton label="Hover me" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
