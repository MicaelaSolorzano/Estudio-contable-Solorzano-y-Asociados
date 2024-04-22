export default function Nav() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-between">
      <div className="flex w-full items-center justify-between p-10 gap-8 bg-bunting-800 text-white top-0 sticky">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Solórzano & Asociados</h1>
          <h5>Consultores y Auditores</h5>
        </div>
        <div className="flex justify-normal gap-8">
          <p>Inicio</p>
          <p>Nuestros servicios</p>
          <p>Sobre nosotros</p>
          <p>Contacto</p>
        </div>
      </div>
    </section>
  );
}
