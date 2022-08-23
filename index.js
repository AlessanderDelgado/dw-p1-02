"use strict";

/* TODO */
let categoriaSueldoBasicoMensual = 0;
let subCaterogoriaSueldoBasicoMensual = '';
let sueldoRango = '';

do {
    console.log("entro en el primer do");
    categoriaSueldoBasicoMensual = parseInt(prompt("Ingrese la categoría, puede ser 1, 2 o 3"));

    if ( (categoriaSueldoBasicoMensual != "1") && (categoriaSueldoBasicoMensual != "2") && (categoriaSueldoBasicoMensual != "3")) {
        alert ('Por favor ingrese valores válidos.');
    }
    } while ((categoriaSueldoBasicoMensual != "1") && (categoriaSueldoBasicoMensual != "2") && (categoriaSueldoBasicoMensual != "3")) ;
    console.log("sigue despues del numero");

do {
    subCaterogoriaSueldoBasicoMensual = prompt("Ingrese la subcategoria, puede ser A, B o C");
    console.log("entro la letra")

    if ((subCaterogoriaSueldoBasicoMensual != "A") && (subCaterogoriaSueldoBasicoMensual != "B") && (subCaterogoriaSueldoBasicoMensual != "C")) {
        alert ('Por favor ingrese valores válidos.');
        console.log("puso mal la letra")
    }
    } while ((subCaterogoriaSueldoBasicoMensual != "A") && (subCaterogoriaSueldoBasicoMensual != "B") && (subCaterogoriaSueldoBasicoMensual != "C")) ;
    console.log("puso bien la letra")

    if (categoriaSueldoBasicoMensual == 1){
        categoriaSueldoBasicoMensual = 1000;
    } else if (categoriaSueldoBasicoMensual == 2){
        categoriaSueldoBasicoMensual = 1500;
    } else if (categoriaSueldoBasicoMensual == 3){
        categoriaSueldoBasicoMensual = 2000;
    }

    if (subCaterogoriaSueldoBasicoMensual == "A"){
        subCaterogoriaSueldoBasicoMensual = 1.5;
    } else if (subCaterogoriaSueldoBasicoMensual == "B"){
        subCaterogoriaSueldoBasicoMensual = 2;
    } else if (subCaterogoriaSueldoBasicoMensual == "C"){
        subCaterogoriaSueldoBasicoMensual = 2.5;
    }


const cobraSueldoMensual = categoriaSueldoBasicoMensual * subCaterogoriaSueldoBasicoMensual;

if (cobraSueldoMensual >= 1500 && cobraSueldoMensual <= 3000) {
    sueldoRango = "inicial";
}
if (cobraSueldoMensual >= 3001 && cobraSueldoMensual <= 4000) {
    sueldoRango = "intermedio";
}
if (cobraSueldoMensual >= 4001) {
    sueldoRango = "avanzado";
}



alert(`El sueldo que cobra es u$s ${cobraSueldoMensual} y su rango es ${sueldoRango}`);