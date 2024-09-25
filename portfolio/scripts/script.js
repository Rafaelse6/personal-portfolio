function sendMail() {
  let params = {
    from_name: document.getElementById("nome").value,
    from_email: document.getElementById("email").value,
    subject: document.getElementById("assunto").value,
    message: document.getElementById("mensagem").value,
  };

  emailjs
    .send("service_etan5u1", "template_3oishs9", params)
    .then(function (response) {
      alert("Email enviado com sucesso!");
      console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function (error) {
      alert("Erro ao enviar o e-mail. Tente novamente.");
      console.log("FAILED...", error);
    });
}
