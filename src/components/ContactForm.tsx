const ContactForm = () => {
  const services = [
    "Manutenção de equipos",
    "Webinars",
    "Gestão de redes sociais",
    "Desenvolvimento web"
  ];

  return (
    <section className="pt-[10px] px-[50px] pb-[200px] bg-white">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Contacte connosco</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Nome *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
              Serviço *
            </label>
            <select
              id="service"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
            >
              <option value="">Selecione um serviço</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-800 focus:border-transparent"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-800 hover:bg-gray-600 text-white rounded-lg shadow-md transition-transform hover:scale-105"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;