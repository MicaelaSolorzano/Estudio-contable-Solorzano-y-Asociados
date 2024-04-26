import fb from "../../../../img/facebook.png";

export default function Footer() {
  return (
    <footer className="flex min-w-screen w-full items-center justify-between ">
      <div className="flex w-full items-center justify-between p-10 gap-8 bg-chambray-900 text-white ">
        <div className="flex flex-col ">
          <h2 className="text-lg"> Solórzano & Asociados</h2>

          <div className="flex gap-3 text-sm">
            <p>
              <a href="#welcome">Inicio</a>
            </p>
            <p>
              <a href="#goals">Objetivos</a>
            </p>
            <p>
              <a href="#goals">Sobre nosotros</a>
            </p>
            <p>
              <a href="#services">Servicios</a>
            </p>

            <p>
              <a href="#contact">Contacto</a>
            </p>
          </div>
        </div>
        <div className="text-sm">
          <img src={fb}></img>
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
