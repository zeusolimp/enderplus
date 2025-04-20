
import ButtonTop from "@/components/ButtonTop";

import Footer from "@/components/Footer";

import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Servicos() {
  const services = [
    {
      title: "Desenvolvimento Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    },
    {
      title: "Gestão de Redes Sociais",
      description: "Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Proin eget tortor risus.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg"
    },
    {
      title: "Webinars",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
    },
    {
      title: "Manutenção de Equipos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Donec sollicitudin molestie malesuada.",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
    }
  ];

  const clients = [
    "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg",
    "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg", "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg"
  ];

  return (
    <>
      <ButtonTop />
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 px-[50px]">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Nossos Serviços</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum.
            </p>
          </div>
        </section>

        {/* Services Detail Section */}
        <section className="py-20 px-[50px]">
          <div className="container mx-auto">
            <div className="space-y-20">
              {services.map((service, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                  <div className="w-full md:w-1/2">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-gray-50 py-20 px-[50px]">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Nossos Clientes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Image
                    src={client}
                    alt={`Client ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
