

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-100 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Sean Michael Manaog. All rights reserved.
        </p>
      </div>
    </footer>
  );
}