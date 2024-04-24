import Image from "next/image";
import Nav from "./(components)/nav/Nav";
import Contact from "./(components)/contact/page";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col justify-between ">
      <Nav></Nav>
      <h1 className="title">Contacto</h1>
      <Contact></Contact>
    </main>
  );
}
