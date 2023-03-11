addEventListener("DOMContentLoaded", () => {
  let correo = document.querySelector(".correo")
  let btnEnviar = document.querySelector(".btnEnviar")
  let textoResultado = document.querySelector(".textoResultado")
  
  btnEnviar.addEventListener("click", () => {
    let correoValor = correo.value
    if(verificar(correoValor)){
      textoResultado.textContent = correoValor
    }else{
      textoResultado.textContent = "correo no valido"
    }
  })
});

const verificar = caracter => {
  let valor = false
  if(caracter.includes("@")){
    let caracterSpliteado = caracter.split("@")
    if(caracterSpliteado[1] === "dbz.com"){
      valor = true
    }
  }

  return valor
}