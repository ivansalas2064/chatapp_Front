
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-registro");

  const campos = {
    nombre: document.getElementById("nombrec"),
    apellidoP: document.getElementById("apellidoP"),
    apellidoM: document.getElementById("apellidoM"),
    edad: document.getElementById("fechaNacimiento"),
    sexo: document.getElementById("sexo"),
    email: document.getElementById("emailR"),
    pass1: document.getElementById("password1"),
    pass2: document.getElementById("password2"),
    telefono: document.getElementById("telefono")
  };

  const avisos = {
    nombre: document.getElementById("aviso-nombre"),
    apellidoP: document.getElementById("aviso-apellidoP"),
    apellidoM: document.getElementById("aviso-apellidoM"),
    edad: document.getElementById("aviso-edad"),
    sexo: document.getElementById("aviso-sexo"),
    email: document.getElementById("aviso-email-r"),
    pass1: document.getElementById("aviso-pass1"),
    pass2: document.getElementById("aviso-pass2"),
    telefono: document.getElementById("aviso-telefono")
  };

  function aplicarEstilo(campo, valido) {
    campo.classList.remove("is-valid", "is-invalid");
    campo.classList.add(valido ? "is-valid" : "is-invalid");
  }

  function validarSoloLetras(campo, aviso) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const valido = regex.test(campo.value.trim());
    aviso.style.display = valido ? "none" : "inline";
    aplicarEstilo(campo, valido);
    return valido;
  }

  function validarEdad() {
  const inputFecha = document.getElementById('fechaNacimiento');
  const fecha = new Date(inputFecha.value);
  const min = new Date('1900-01-01');
  const max = new Date('2025-12-31');

  const valido = !isNaN(fecha.getTime()) && fecha >= min && fecha <= max;

  inputFecha.classList.remove('is-valid', 'is-invalid');
  inputFecha.classList.add(valido ? 'is-valid' : 'is-invalid');

  if (avisos?.fecha) {
    avisos.fecha.style.display = valido ? 'none' : 'inline';
  }

  return valido;
}


  function validarSexo() {
    const valido = campos.sexo.value !== "";
    avisos.sexo.style.display = valido ? "none" : "inline";
    aplicarEstilo(campos.sexo, valido);
    return valido;
  }

  function validarEmail() {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const valido = regex.test(campos.email.value.trim());
    avisos.email.style.display = valido ? "none" : "inline";
    aplicarEstilo(campos.email, valido);
    return valido;
  }

  function validarTelefono() {
    const regex = /^[0-9]{10}$/;
    const valido = regex.test(campos.telefono.value.trim());
    avisos.telefono.style.display = valido ? "none" : "inline";
    aplicarEstilo(campos.telefono, valido);
    return valido;
  }

  function validarPasswords() {
    const pass1 = campos.pass1.value.trim();
    const pass2 = campos.pass2.value.trim();
    const regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^\w\s]).{8,}$/;
    
    const segura = regex.test(pass1);
    const iguales = pass1 === pass2;

    avisos.pass1.style.display = segura ? "none" : "inline";
    avisos.pass2.style.display = iguales ? "none" : "inline";

    aplicarEstilo(campos.pass1, segura);
    aplicarEstilo(campos.pass2, segura && iguales);

    return segura && iguales;
  }

  campos.nombre.addEventListener("input", () => validarSoloLetras(campos.nombre, avisos.nombre));
  campos.apellidoP.addEventListener("input", () => validarSoloLetras(campos.apellidoP, avisos.apellidoP));
  campos.apellidoM.addEventListener("input", () => validarSoloLetras(campos.apellidoM, avisos.apellidoM));
  campos.edad.addEventListener("input", validarEdad);
  campos.sexo.addEventListener("change", validarSexo);
  campos.email.addEventListener("input", validarEmail);
  campos.telefono.addEventListener("input", validarTelefono);
  campos.pass1.addEventListener("input", validarPasswords);
  campos.pass2.addEventListener("input", validarPasswords);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const validaciones = [
      validarSoloLetras(campos.nombre, avisos.nombre),
      validarSoloLetras(campos.apellidoP, avisos.apellidoP),
      validarSoloLetras(campos.apellidoM, avisos.apellidoM),
      validarEdad(),
      validarSexo(),
      validarEmail(),
      validarTelefono(),
      validarPasswords()
    ];

    const todoValido = validaciones.every(v => v === true);


  if (todoValido) {
  alert("Registro exitoso 🎉");

  form.reset();

  Object.values(campos).forEach(campo => {
    campo.classList.remove('is-valid', 'is-invalid');
  });

  Object.values(avisos).forEach(aviso => {
    aviso.style.display = 'none';
  });
}

  });
});
