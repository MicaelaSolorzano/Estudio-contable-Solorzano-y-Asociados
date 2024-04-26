export default function Services() {
  return (
    <section
      id="services"
      className="flex min-w-screen flex-col w-4/5 items-center justify-between gap-10"
    >
      <h1 className="title">Nuestros Servicios</h1>

      <div className="flex">
        <div>
          <p> Contabilidad, Auditoría, Finanzas y Societario</p>
        </div>

        <div>
          <p>Impuestos Nacionales e Internacionales</p>
        </div>

        <div>
          <p>
            Consultoría y Tercerización de Procesos Administrativos y Contables
          </p>
        </div>
      </div>

      <button className="btn-bg">Saber más</button>
    </section>
  );
}
