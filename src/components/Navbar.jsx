import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: 'Testing 1', href: '#' },
    { name: 'Testing 2', href: '#' },
    { name: 'Testing 3', href: '#' },
    { name: 'Testing 4', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main">
        {/* Testing 1 */}
        <a href="#" className="text-white font-bold text-lg tracking-wide">
          Testing Area
        </a>

        {/* Desktop link */}
        <ul className="hidden md:flex items-center gap-8 text-gray-200">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.href} className="hover:text-white transition">
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-200 hover:text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* Icon: hamburger / close */}
          <svg
            className={`h-6 w-6 ${open ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            className={`h-6 w-6 ${open ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        id="mobile-menu"
        className={`md:hidden border-t border-white/10 bg-black/90 ${open ? 'block' : 'hidden'}`}
      >
        <ul className="px-4 py-3 space-y-2 text-gray-200">
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                className="block rounded px-3 py-2 hover:bg-white/10 hover:text-white transition"
                onClick={() => setOpen(false)}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
