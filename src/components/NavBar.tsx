'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar el scroll para cambiar el estilo del menú
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpiar el evento
  }, []);

  return (
    <nav
      className={`${isScrolled ? 'bg-white text-gray-800' : 'bg-white text-gray-800'
        } fixed top-0 left-0 w-full z-50 transition-colors duration-200 shadow-md`}
    >
      {/* Contenedor principal del menú */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Ender Plus</div>

        {/* Botón hamburguesa (visible solo en móviles) */}
        <button
          className={`md:hidden focus:outline-none ${isScrolled ? 'text-gray-800' : 'text-gray-800'
            }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú principal (visible en pantallas grandes) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              href="/"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/nos"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Sobre Nós
            </Link>
          </li>
          <li>
            <Link
              href="/servicos"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      {/* Fondo transparente y menú emergente (móvil) */}
      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
          } md:hidden`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`bg-white text-gray-800 w-full h-[35vh] p-4 shadow-xl absolute bottom-0 transform transition-transform duration-300 ease-in-out rounded-t-3xl border-t border-gray-100`}
          style={{ transform: isMenuOpen ? 'translateY(0)' : 'translateY(100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-2 flex flex-col-reverse h-full justify-end pb-[30px]">
            <li>
              <Link
                href="/contacto"
                className="block hover:bg-gray-800 hover:text-white px-3 py-3 rounded text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block hover:bg-gray-800 hover:text-white px-3 py-4 rounded text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/servicos"
                className="block hover:bg-gray-800 hover:text-white px-3 py-4 rounded text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                href="/nos"
                className="block hover:bg-gray-800 hover:text-white px-3 py-4 rounded text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="block hover:bg-gray-800 hover:text-white px-3 py-4 rounded text-center text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </nav >
  );
};

export default NavBar;