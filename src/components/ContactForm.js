export default function ContactForm() {
  async function handleSubmit(event) {
    event.preventDefault();
    let inputValues = {email:event.target.email.value, subject:event.target.subject.value, message:event.target.message.value};
    let bodyRequest = JSON.stringify(inputValues);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: bodyRequest,
      });
      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);
      event.target.email.value = '';
      event.target.subject.value = '';
      event.target.message.value = '';
      document.getElementById("emailOk").style.display = 'block';
      setTimeout(() => {
        const box = document.getElementById("emailOk");
        box.style.display = 'none';
      }, 4000);
      document.getElementById("emailKO").style.display = 'none';
      //alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      document.getElementById("emailKO").style.display = 'block';
      document.getElementById("emailOk").style.display = 'none';
      setTimeout(() => {
        const box = document.getElementById("emailKO");
      
        box.style.display = 'none';
      }, 4000);
      //alert("Error, please try resubmitting the form");
    }
  }

  return (
    <section>
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contacta conmigo
        </h2>
      <h3 id="emailOk" className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white hidden">Tu correo se ha enviado, ¡Gracias!</h3>
      <h3 id="emailKO" className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white hidden">Ha ocurrido un error, no se ha podido enviar el correo.</h3>
        <form method="POST" onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tu email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="ejemplo@jmanzani.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Motivo
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="¿Por qué quieres contactar conmigo?"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Tu mensaje
            </label>
            <textarea
              id="message"
              rows="6"
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Lo que me quieras comentar"
              required
            ></textarea>
          </div>
          <button
            id="submit"
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-gray-900 bg-gray-50 rounded-lg bg-primary-700 shadow-sm border border-gray-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
