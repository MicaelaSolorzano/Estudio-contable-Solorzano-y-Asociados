export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-w-screen flex-col justify-items-center p-10"
    >
      <div>
        <h1 className="title">Contacto</h1>
      </div>
      <div className="flex">
        <div className="flex flex-col w-96 p-10 gap-5">
          <h1>¿Necesita un contador de confianza?</h1>
          <h4 className="text-justify">
            ¡No dude en contactarnos! Puede enviarnos su consulta por medio del
            siguiente formulario o al mail:{" "}
            <span> info@solorzanoyasoc.com.ar </span> y a la brevedad nos
            comunicaremos con usted.
          </h4>
        </div>
        <div className="flex flex-col items-center ">
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
      </div>
    </section>
  );
}
