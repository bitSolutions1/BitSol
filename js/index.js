const name = document.getElementById("fname");
const email = document.getElementById("femail");
const text = document.getElementById("ftext");
const submit = document.getElementById("form-contact");

submit.addEventListener("submit", (e) => {
  e.preventDefault();

  let ebody = `
    <h2>Message from Website User</h2>
    <p><strong>Name:</strong> ${name.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Message:</strong> ${text.value}</p>
  `;

  Email.send({
    SecureToken: "afcf195f-b694-451f-b4b8-33bf28f84a6b",
    To: "bitSolutions2323@gmail.com",
    From: "bitSolutions2323@gmail.com",
    Subject: "Message From Users",
    Body: ebody,
  }).then((message) => alert(message));
});
