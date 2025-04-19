
import ContactForm from "@/components/ContactForm";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";


export default function Home() {
  return (
    <>
      <NavBar />
      <Hero
        title="Bienvenido a Ender Plus"
        subtitle="Aqui descubriras todo nuestros servicios"
        imgDir="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <Services />
      <Features />
      <ContactForm />
    </>
  );
}
