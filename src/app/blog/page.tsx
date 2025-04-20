
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import ButtonTop from "@/components/ButtonTop";

export default function Blog() {
  const articles = [
    {
      title: "A Revolução da IA: Transformações nos Últimos Dois Anos",
      excerpt: "Desde ChatGPT até sistemas de diagnóstico médico, a inteligência artificial tem revolucionado diversos setores. Descubra como esta tecnologia está mudando nossa forma de trabalhar e viver.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      date: "15 Nov 2023",
      readTime: "8 min"
    },
    {
      title: "Redes Sociais: Uma Década Revolucionando as Telecomunicações",
      excerpt: "Como Instagram, WhatsApp e TikTok transformaram a forma como nos comunicamos. Uma análise profunda das mudanças nos últimos 10 anos.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg",
      date: "12 Nov 2023",
      readTime: "10 min"
    },
    {
      title: "10 Novas Profissões da Era Pós-Covid",
      excerpt: "Da gestão de trabalho remoto até especialistas em cibersegurança doméstica, conheça as carreiras que surgiram após a pandemia.",
      image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg",
      date: "10 Nov 2023",
      readTime: "7 min"
    },
    {
      title: "Chips do Futuro: A Nova Era do Processamento",
      excerpt: "Dos processadores quânticos aos chips neuromórficos, uma análise das tecnologias que moldarão a próxima década de computação.",
      image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg",
      date: "8 Nov 2023",
      readTime: "12 min"
    },
    {
      title: "A Evolução dos Smartphones: Do 2000 ao Futuro",
      excerpt: "Do primeiro iPhone aos dispositivos dobráveis, uma jornada pela evolução dos smartphones e as tendências futuras.",
      image: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg",
      date: "5 Nov 2023",
      readTime: "9 min"
    },
    {
      title: "Top 5 Criptomoedas: Guia Essencial",
      excerpt: "Bitcoin, Ethereum, Binance Coin, Cardano e Solana: um guia completo sobre as principais criptomoedas do mercado.",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      date: "1 Nov 2023",
      readTime: "11 min"
    }
  ];

  return (
    <>
      <ButtonTop />
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 px-[50px]">
          <div className="container mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center">Blog Tecnológico</h1>
            <p className="text-xl text-center max-w-3xl mx-auto">
              Explorando as últimas tendências e inovações no mundo da tecnologia
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-20 px-[50px]">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <article key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span>{article.readTime} leitura</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{article.title}</h2>
                    <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    <Link 
                      href="#" 
                      className="text-gray-800 font-semibold hover:text-gray-600 transition-colors"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
