import Image from "next/image";
import Nav from "./(components)/nav/Nav";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-between ">
      <Nav></Nav>
    </main>
  );
}
