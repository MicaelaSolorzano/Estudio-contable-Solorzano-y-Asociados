export default function Contact() {
  return (
    <section>
      <div>
        <h4>
          <h2>¿Necesitás un contador de confianza?</h2>
          No dudes en contactarnos!
        </h4>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <form className="flex flex-col w-1/2 justify-between p-10 gap-5">
          <label>Nombre:</label>
          <input className="inpt"></input>

          <label>Email:</label>
          <input className="inpt"></input>

          <label>Teléfono de contacto:</label>
          <input className="inpt"></input>

          <label>Escribe un mensaje:</label>
          <textarea className="inpt"></textarea>

          <button className="btn-bg"> Enviar</button>
        </form>
      </div>
    </section>
  );
}
