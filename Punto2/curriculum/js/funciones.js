function verificarDatos() {
  if (document.getElementById("fullname").value == "") {
    alert("Falta ingresar su nombre completo");
  }

  if (document.getElementById("email").value == "") {
    alert("Falta ingresar su mail");
  }

  if (document.getElementById("tp").value == "") {
    alert("Falta ingresar su telefono");
  }

  if (document.getElementById("asu").value == "") {
    alert("Falta ingresar su asunto");
  }

  if (document.getElementById("mj").value == "") {
    alert("Falta ingresar su mensaje");
  }

  if (
    document.getElementById("fullname").value != "" &&
    document.getElementById("email").value != "" &&
    document.getElementById("tp").value != "" &&
    document.getElementById("asu").value != "" &&
    document.getElementById("mj").value != ""
  ) {
    const $form = document.querySelector("#form");

    $form.addEventListener("submit", handleSubmit);

    async function handleSubmit(event) {
      event.preventDefault();
      const form = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        this.reset();
        alert("Gracias por contactarme, te escribiré pronto ( ͡~ ͜ʖ ͡°)");
      }
    }
  }
}
