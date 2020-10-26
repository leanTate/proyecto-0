function juego(){
let letras=['T','R','W','I','U','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','A','O'];
const numero= prompt("coloque un numero entre 0 y 25");
const letra=prompt("coloque una letra en mayuscula");
let resultado="sa"

if(numero>=0&&numero<=25){
    resultado=letras[numero]
}else{
  alert("el numero proporcionado no es valido");
}
if (resultado=="sa"){
}else if (resultado==letra){
  alert("la letra:"+letra+"coincide con:"+resultado+"y ha ganado");
}else if(resultado!==letra){
  alert("la letra:"+letra+"no coincide con:"+resultado+"y ha perdido");
}
}
