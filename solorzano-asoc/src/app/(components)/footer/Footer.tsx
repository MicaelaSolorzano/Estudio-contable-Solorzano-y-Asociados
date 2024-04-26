export default function Footer() {
  return (
    <footer className="flex min-w-screen w-full items-center justify-between ">
      <div className="flex w-full items-center justify-between p-10 gap-8 bg-chambray-900 text-white ">
        <div className="flex flex-col ">
          <h2 className="text-lg"> Solórzano & Asociados</h2>

          <div className="flex gap-3 text-sm">
            <p>Inicio</p>
            <p>Objetivos</p>
            <p>Servicios</p>
            <p>Sobre nosotros</p>
            <p>Contacto</p>
          </div>
        </div>
        <div className="text-sm">
          <h5 className="text-base font-semibold">
            Ciudad Autónoma de Buenos Aires
          </h5>
          <p>Quintino Bocayuva 1061</p>

          <p> +54 11 5958 6978</p>
          <p>info@solorzanoyasoc.com.ar</p>
        </div>
        <div>
          <p>f</p>
          <p>t</p>
          <p>i</p>
        </div>
      </div>
    </footer>
  );
}
