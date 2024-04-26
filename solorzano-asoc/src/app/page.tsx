import Nav from "./(components)/nav/Nav";
import Goals from "./(components)/goals/Goals";
import Welcome from "./(components)/welcome/Welcome";
import Services from "./(components)/services/Services";
import Contact from "./(components)/contact/page";
import Footer from "./(components)/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between ">
      <Nav></Nav>
      <Welcome></Welcome>
      <Goals></Goals>
      <Services></Services>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  );
}
