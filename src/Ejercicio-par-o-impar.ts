btncalcular.addEventListener("click", () => {
  let dato = document.getElementById("numero");
  let numero: number = dato.value;
  if (numero == 0) {
    console.log("El número " + numero + " no es par ni impar");
  } else if (numero % 2 == 0) {
    console.log("El número " + numero + " es par");
  } else {
    console.log("El número " + numero + " es impar");
  }
});
