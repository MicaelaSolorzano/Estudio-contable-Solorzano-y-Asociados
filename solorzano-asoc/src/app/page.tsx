import Nav from "./(components)/nav/Nav";
import Services from "./(components)/services/Services";
import Contact from "./(components)/contact/page";
import Footer from "./(components)/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <Nav></Nav>
      <h1 className="title">Bienvenidos a estudio Solórzano & Asociados</h1>
      <h3 className="w-4/5">
        Un estudio dedicado a brindar asesoramiento integral y personalizado a
        nuestros clientes en materia impositiva, contable, laboral y societaria.
        Brindamos un servicio de alto nivel profesional, ofrecemos soluciones
        concretas a sus necesidades y lo acompañamos en su crecimiento
      </h3>
      <h1 className="title">Nuestros Servicios</h1>
      <Services></Services>
      <h1 className="title">Contacto</h1>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
