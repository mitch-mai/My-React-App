import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CounterButton from './components/Buttons/CounterButton';
import HoverButton from './components/Buttons/HoverButton';
/*import Button from './components/Buttons/Button';
import ImgButton from './components/Buttons/ImgButton'; */

export default function App() {

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      {/* main content area */}
      <main className="flex-1 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-bold">Welcome Page</h1>

          {/* Counter button (side) */}
          <CounterButton />

          {/* Hover button (side) */}
          <HoverButton />
      </main>

      <Footer />
    </div>
  );
}
