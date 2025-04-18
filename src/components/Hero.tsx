
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  imgDir: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imgDir}) => {
  return (
    <>
      <section 
        className="flex 
        items-center 
        justify-center 
        min-h-screen 
        text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url(${imgDir})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <h2 className="text-lg mb-8">{subtitle}</h2>
          <div className="flex justify-center gap-4">
            <Link
              href="/contacto"
              className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg shadow-md transition-transform hover:scale-105"
              >
              Contacto
            </Link>
            <Link
              href="/sobre-nosotros"
              className="px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg shadow-md transition-transform hover:scale-105"
              >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;