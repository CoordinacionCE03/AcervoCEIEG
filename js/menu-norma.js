//Visualizar y ocultar documentos
function mostrar1() {
    document.getElementById('codigo').style.display = 'block';
    document.getElementById('ley').style.display = 'none';
    document.getElementById('reglas').style.display = 'none';
    document.getElementById('cte').style.display = 'none';
    document.getElementById('creacion').style.display = 'none';
    document.getElementById('previsual__imagen').style.display = 'none';
}
function mostrar2() {
    document.getElementById('codigo').style.display = 'none';
    document.getElementById('ley').style.display = 'block';
    document.getElementById('reglas').style.display = 'none';
    document.getElementById('cte').style.display = 'none';
    document.getElementById('creacion').style.display = 'none';
    document.getElementById('previsual__imagen').style.display = 'none';
}
function mostrar3() {
    document.getElementById('codigo').style.display = 'none';
    document.getElementById('ley').style.display = 'none';
    document.getElementById('reglas').style.display = 'block';
    document.getElementById('cte').style.display = 'none';
    document.getElementById('creacion').style.display = 'none';
    document.getElementById('previsual__imagen').style.display = 'none';
}
function mostrar4() {
    document.getElementById('codigo').style.display = 'none';
    document.getElementById('ley').style.display = 'none';
    document.getElementById('reglas').style.display = 'none';
    document.getElementById('cte').style.display = 'block';
    document.getElementById('creacion').style.display = 'none';
    document.getElementById('previsual__imagen').style.display = 'none';
}
function mostrar5() {
    document.getElementById('codigo').style.display = 'none';
    document.getElementById('ley').style.display = 'none';
    document.getElementById('reglas').style.display = 'none';
    document.getElementById('cte').style.display = 'none';
    document.getElementById('creacion').style.display = 'block';
    document.getElementById('previsual__imagen').style.display = 'none';
}
//FINVisualizar y ocultar documentos de la otra opcion

//FIN Visualizar y ocultar documentos

//Para ver que opcion esta seleccionada PRIMER AÑO
document.getElementById("selected").addEventListener("click", cambio);
document.getElementById("selected2").addEventListener("click", cambio2);
document.getElementById("selected3").addEventListener("click", cambio3);
document.getElementById("selected4").addEventListener("click", cambio4);
document.getElementById("selected5").addEventListener("click", cambio5);
document.getElementById("selected6").addEventListener("click", cambio6);
    //Selected del otro opciones
    document.getElementById("selected7").addEventListener("click", cambio7);
    document.getElementById("selected8").addEventListener("click", cambio8);
    document.getElementById("selected9").addEventListener("click", cambio9);
    document.getElementById("selected10").addEventListener("click", cambio10);

var selected = document.getElementById("selected");
var selected2 = document.getElementById("selected2");
var selected3 = document.getElementById("selected3");
var selected4 = document.getElementById("selected4");
var selected5 = document.getElementById("selected5");
var selected6 = document.getElementById("selected6");
    //Selected del otro opciones
    var selected7 = document.getElementById("selected7");
    var selected8 = document.getElementById("selected8");
    var selected9 = document.getElementById("selected9");
    var selected10 = document.getElementById("selected10");

function cambio(){
	selected.classList.add("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio2(){
	selected.classList.remove("selected");
	selected2.classList.add("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio3(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.add("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio4(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.add("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio5(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.add("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio6(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.add("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
//Selected de los otroas opciones
function cambio7(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.add("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio8(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.add("selected");
	selected9.classList.remove("selected");
	selected10.classList.remove("selected");
}
function cambio9(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.add("selected");
	selected10.classList.remove("selected");
}
function cambio10(){
	selected.classList.remove("selected");
	selected2.classList.remove("selected");
	selected3.classList.remove("selected");
    selected4.classList.remove("selected");
	selected5.classList.remove("selected");
	selected6.classList.remove("selected");
    //Selected del otro opciones
    selected7.classList.remove("selected");
    selected8.classList.remove("selected");
	selected9.classList.remove("selected");
	selected10.classList.add("selected");
}


//FIN Para ver que opcion esta seleccionada PRIMER AÑO
