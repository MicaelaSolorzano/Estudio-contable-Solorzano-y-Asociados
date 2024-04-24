export default function Nav() {
  return (
    <header className="flex w-full flex-col items-center justify-between top-0  sticky ">
      <div className="flex w-full items-center justify-between p-5 gap-8 bg-chambray-800 text-white ">
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
    </header>
  );
}
