export default function Contact() {
  return (
    <section className="flex  min-h-screen min-w-screen justify-items-center p-10">
      <div className="flex flex-col w-96 p-10 gap-5">
        <h1>¿Necesita un contador de confianza?</h1>
        <h4 className="text-justify">
          ¡No dude en contactarnos! Puede enviarnos su consulta por medio del
          siguiente formulario o al mail:{" "}
          <span> info@solorzanoyasoc.com.ar </span> y a la brevedad nos
          comunicaremos con usted.
        </h4>
      </div>
      <div className="flex min-h-screen flex-col items-center ">
        <form className="flex flex-col w-96 p-10 gap-5">
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
