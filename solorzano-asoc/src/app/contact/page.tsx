export default function Contact() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col items-center justify-between p-20 gap-8 bg-bunting-800">
        <label>
          Nombre:
          <input></input>
        </label>

        <label>
          Email:
          <input></input>
        </label>

        <label>
          Teléfono de contacto:
          <input></input>
        </label>

        <label>
          Escribe un mensaje:
          <textarea></textarea>
        </label>
      </form>
    </section>
  );
}
