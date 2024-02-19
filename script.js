console.log ("Hola Ch38");

//funcion que envie un saludo con alert

//alert("Hola mundo");
function enviarSaludo(){
    alert ("Hola mundo");
}
/**
 * Pedir el nombre de la persona usando un prompt
 * Mostrar el saludo y nombre de la persona con alert
 */
function tuNombre(){

}
/**function enviarSaludoPersona(){
prompt("Dime tu nombre");
return(nombre)
}
*/
function enviarSaludoPersona() {
    let mensaje = prompt ("Dime tu nombre");
    alert("Hola ${mensaje}");
}