export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </section>
  );
}
