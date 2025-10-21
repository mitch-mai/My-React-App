export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Practice</p>
      </div>
    </footer>
  );
}
