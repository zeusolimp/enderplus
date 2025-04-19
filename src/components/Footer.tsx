import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ender Plus</h3>
            <p className="text-gray-400">
              Soluções tecnológicas inovadoras para impulsionar seu negócio ao próximo nível.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menú</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#home" className="hover:text-white">Home</Link></li>
              <li><Link href="#about" className="hover:text-white">Sobre Nós</Link></li>
              <li><Link href="#services" className="hover:text-white">Serviços</Link></li>
              <li><Link href="#contact" className="hover:text-white">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: contato@enderplus.com</li>
              <li>Tel: +51 999 888 777</li>
              <li>Lima, Peru</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/livro-reclamacoes" className="hover:text-white">
                  Livro de Reclamações
                </Link>
              </li>
              <li>
                <Link href="/politicas-privacidade" className="hover:text-white">
                  Políticas de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>© {currentYear} Ender Narea. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;