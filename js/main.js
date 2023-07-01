const formulario = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");
let selected = [];

const cuentas = [
  { id: 10, nombre: "Salvador", saldo: '900.00', pin: "0000" },
  { id: 24, nombre: "Berenice", saldo: '950.00', pin: "1234" },
  { id: 11, nombre: "Victoria", saldo: '500.00', pin: "8976" },
  { id: 12, nombre: "Diego", saldo: '200.00', pin: "9876" },
  { id: 13, nombre: "Salvador Jr.", saldo: '600.00', pin: "0011"},
  { id: 14, nombre: "Kathia Berenice.", saldo: '700.00', pin: "9988"}
];

// renderMenu()
//Validación del PIN del Usuario
const validatePIN = (id, pin) => {
  selected = cuentas.filter((cuenta) => {
    return cuenta.id === parseInt(id);
  });
  if (selected[0].pin === pin) {
    // alerta("Bienvenido");
    wrapper.innerHTML = "";
    renderMenu(selected[0].nombre);
  } else {
    alert("Intenta nuevamente");
  }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_id = event.target["cuenta"].value;

  let pin = prompt("Ingrese su pin", "");
  if (pin != null) {
    validatePIN(user_id, pin);
  }
});

cuentas.forEach((cuenta) => {
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});