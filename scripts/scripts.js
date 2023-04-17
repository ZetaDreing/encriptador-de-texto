let texto = document.querySelector('#input')
const btEncriptar = document.querySelector('#encriptar')
const btDesencriptar = document.querySelector('#desencriptar')
const btCopiar = document.querySelector('#btCopiar')
const msgError = document.querySelector('#error')
let tituloMsg = document.querySelector('.decrypted-conteiner h1')
let textoEncriptado = document.querySelector('.decrypted-conteiner h2')

let textoValido = false
const imagen = document.querySelector('#img')

function btCopiarfuntion(){

    btCopiar.classList.remove('btcopiardeactivate')

}
function error(){
  texto.addEventListener('input',()=>{
    if (texto.value !== texto.value.toLowerCase()){
      console.log('error')
      msgError.classList.remove('errordisable')
      textoValido = false
    }else{
      console.log('no hay error')
      msgError.classList.add('errordisable')
      textoValido = true
    }

    if (textoValido === true){
      btEncriptar.classList.remove('btoff')
      btDesencriptar.classList.remove('btoff')
    }else{
      btEncriptar.classList.add('btoff')
      btDesencriptar.classList.add('btoff')
    }
  })
} 
error()
function encriptar(){
  llave = texto.value
  .replace(/e/gi, "enter")
  .replace(/i/gi, "imes")
  .replace(/a/gi, "ai")
  .replace(/o/gi, "ober")
  .replace(/u/gi, "ufat")

  if (texto.value != ''){
    texto.value = llave;
    tituloMsg.textContent = 'El texto fue encriptado con exito!';
    textoEncriptado.textContent = texto.value;
    imagen.classList.add('removeimg')
    texto.value = ''
    textoValido= false
    btCopiarfuntion()
  }
}
function desencriptar(){
  llave = texto.value
  .replace(/enter/gi, "e")
  .replace(/imes/gi, "i")
  .replace(/ai/gi, "a")
  .replace(/ober/gi, "o")
  .replace(/ufat/gi, "u")

  if (texto.value != ''){
    texto.value = llave;
    tituloMsg.textContent = 'El texto fue desencriptado con exito!';
    textoEncriptado.textContent = texto.value;
    imagen.classList.add('removeimg')
    texto.value = ''
    textoValido= false
    btCopiarfuntion()
  }
}

  btEncriptar.addEventListener('click',()=>{
    if (textoValido === true)
    {
      encriptar()
      console.log('buenas')
    }
  
  })

  btDesencriptar.addEventListener('click',()=>{
    
    if (textoValido === true)
    {
      desencriptar()
      console.log('buenas')
    }
  
  })
  btCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(textoEncriptado.textContent)
  })