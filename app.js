document.getElementById("btn-bg").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Guarda la preferencia en localStorage
  const modo = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem("modo", modo);
});

window.addEventListener("DOMContentLoaded", () => {
  const modo = localStorage.getItem("modo");
  if (modo === "oscuro") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
});
const correo = document.getElementById("email");
const aviso = document.getElementById("aviso");
const formulario = document.getElementById("mi-form");

function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

correo.addEventListener("input", function () {
  if (!validarEmail(this.value)) {
    aviso.style.display = "inline";
    this.style.borderColor = "red";
  } else {
    aviso.style.display = "none";
    this.style.borderColor = "green";
  }
});

formulario.addEventListener("submit", function (e) {
  if (!validarEmail(email.value)) {
    e.preventDefault();
    aviso.textContent = "Por favor ingresa un correo válido antes de enviar.";
    aviso.style.display = "inline";
    correo.style.borderColor = "red";
  }
});


const password = document.getElementById("password");
const avisoPass = document.getElementById("aviso-pass");
const formulario_P = document.getElementById("mi-form");

password.addEventListener("input", function () {
  if (this.value.length < 8) {
    avisoPass.style.display = "inline";
    this.style.borderColor = "red";
  } else {
    avisoPass.style.display = "none";
    this.style.borderColor = "green";
  }
});

formulario.addEventListener("btn-entrar", function (e) {
  if (password.value.length < 8) {
    e.preventDefault();
    avisoPass.textContent = "La contraseña es demasiado corta.";
    avisoPass.style.display = "inline";
    password.style.borderColor = "red";
  }
});
