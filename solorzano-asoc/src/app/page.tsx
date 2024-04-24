import Image from "next/image";
import Nav from "./(components)/nav/Nav";
import Contact from "./(components)/contact/page";
import Footer from "./(components)/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col justify-between ">
      <Nav></Nav>
      <h1 className="title">Contacto</h1>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
