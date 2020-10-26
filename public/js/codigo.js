function datos(){
let nombre=prompt("cual es tu nombre:")||"nombre";
let edad =prompt("cual es tu edad:")||"edad";
let fecha_de_nacimiento =prompt("cuando naciste:")||"fecha de nacimiento";
let tipodepag=prompt("que tipos de pagina usa")||"tipo de pagina";
let webhost=prompt("cuantos webhost esta utilizando:")||"webhost";
let webhostparauso=1000
let restantes=(webhostparauso-webhost)
document.write(`<h2 class="javascript"> nombre:${nombre} edad: ${edad} fecha de nacimiento: ${fecha_de_nacimiento} webost restantes:${restantes} webhost en uso:${webhost}</h2>`)
}