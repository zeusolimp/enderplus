
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contacto() {
  return (
    <>
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 px-[50px]">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Contato</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Entre em contato connosco para saber mais sobre nossos serviços.
            </p>
          </div>
        </section>

        {/* Contact Info & Map Section */}
        <section className="py-20 px-[50px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Informações de Contato</h2>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h3 className="font-semibold mb-2">Endereço</h3>
                    <p>Av. Principal 123, Lima, Peru</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p>contato@enderplus.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefone</h3>
                    <p>+51 999 888 777</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Horário de Atendimento</h3>
                    <p>Segunda a Sexta: 9:00 - 18:00</p>
                    <p>Sábado: 9:00 - 13:00</p>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-8 h-[300px] rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.980822578654!2d-77.03197792393798!3d-12.046639588118416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b5d35662c7%3A0x25c0819c6d1c223b!2sPlaza%20Mayor%20de%20Lima!5e0!3m2!1ses!2spe!4v1700078433317!5m2!1ses!2spe"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
