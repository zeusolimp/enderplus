'use client'
import { useState, useEffect } from 'react';

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
      className={`${
        isScrolled ? 'bg-white text-gray-800' : 'bg-white text-gray-800'
      } fixed top-0 left-0 w-full z-50 transition-colors duration-200 shadow-md`}
    >
      {/* Contenedor principal del menú */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Ender Plus</div>

        {/* Botón hamburguesa (visible solo en móviles) */}
        <button
          className={`md:hidden focus:outline-none ${
            isScrolled ? 'text-gray-800' : 'text-gray-800'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menú principal (visible en pantallas grandes) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:bg-gray-800 hover:text-white px-3 py-2 rounded"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Fondo transparente y menú emergente (móvil) */}
      <div
        className={`${
          isMenuOpen ? 'fixed inset-0 z-50' : 'hidden'
        } md:hidden`}
        onClick={() => setIsMenuOpen(false)} // Cerrar el menú al hacer clic fuera
      >
        {/* Menú desplegable desde la derecha */}
        <div
          className={`${
            isScrolled ? 'bg-white text-gray-800' : 'bg-white text-gray-800'
          } w-64 h-full p-4 shadow-lg absolute top-0 right-0 transform transition-transform ease-in-out`}
          style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
          onClick={(e) => e.stopPropagation()} // Evitar que el menú se cierre al hacer clic dentro
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="block hover:bg-blue-900 hover:text-white px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:bg-blue-900 hover:text-white px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block hover:bg-blue-900 hover:text-white px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="block hover:bg-blue-900 hover:text-white px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:bg-blue-900 hover:text-white px-3 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;