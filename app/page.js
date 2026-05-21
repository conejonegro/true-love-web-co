import Hero from "./components/Hero/Hero";
import Servicios from "./components/Servicios/Servicios";
import Stack from "./components/Stack/Stack";
import Industrias from "./components/Industrias/Industrias";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Servicios />
        <Industrias />
        <Stack />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
