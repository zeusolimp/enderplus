import Image from 'next/image';

const Features = () => {
  // Array de objetos que contiene la información de cada característica
  const features = [
    {
      title: "Desenvolvimento web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg",
    },
    {
      title: "Gestão de redes sociais",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      image: "https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg",
    },
    {
      title: "Webinars",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
      image: "https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg",
    },
    {
      title: "Manutenção de equipos",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.",
      image: "https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg",
    },
  ];

  return (
    <section className="pt-25 pb-1 bg-gray-100">
      <div className="container mx-auto">
        {/* Mapea el array de características para crear secciones con diseño alternado */}
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-30 mb-30 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Contenedor de imagen - ancho completo en móvil, medio ancho en desktop */}
            <div className="w-full md:w-1/2">
              <Image
                src={feature.image}
                alt={feature.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            {/* Contenedor de contenido - centrado en móvil, alineado a la izquierda en desktop */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <button className="px-6 py-2 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105">
                Saber mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;