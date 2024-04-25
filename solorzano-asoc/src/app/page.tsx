import Image from "next/image";
import Nav from "./(components)/nav/Nav";
import Services from "./(components)/services/Services";
import Contact from "./(components)/contact/page";
import Footer from "./(components)/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <Nav></Nav>
      <h1 className="title">Bienvenidos a estudio Solórzano & Asociados</h1>
      <h3>
        Un estudio dedicado a brindar asesoramiento integral y personalizado a
        nuestros clientes en materia impositiva, contable, laboral y societaria.
        Brindamos servicios de outsourcing, consultoría, asesoramiento a
        empleados en relación de dependencia y servicios para consorcios.
      </h3>
      <h1 className="title">Nuestros Servicios</h1>
      <Services></Services>
      <h1 className="title">Contacto</h1>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
