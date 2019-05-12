function validate(str) {
    // Notas
    //const arrayStr = str.split(""); para convertir a array un string
    // indexGutierrez - 7 es el valor de la subcadena con los ABGO

    let indexGutierrez = parseInt(str.indexOf("GUTIERREZ"));
    const subStrAbgo = str.slice(7, indexGutierrez);
    const arrAbgo = subStrAbgo.match(/(ABGO)/g);
    const lenArrAbgo = arrAbgo.length;
    const strToMatch = '^(1887970)(ABGO){' + lenArrAbgo + ',' + lenArrAbgo +'}(GUTIERREZ)(OGBA){' + (2 * lenArrAbgo) + ',' + 
    (2 * lenArrAbgo) + '}$';
    if (str.match(strToMatch)){
        console.log('The string: '+ str + ' matches the regular expression');
        document.getElementById("boton").style.backgroundColor = 'green';
        document.getElementById("boton").style.color = 'white';
        document.getElementById("boton").value = 'Valida';
        document.getElementById("regex").innerHTML = `<p><strong>Expresion regular evaluada: </strong>${strToMatch}</p>`;
        document.getElementById("regex").style.marginTop = '40px';
    }else{
        document.getElementById("boton").style.backgroundColor = 'red';
        document.getElementById("boton").style.color = 'white';
        document.getElementById("boton").value = 'Invalida';
        if (document.getElementById("regex").innerHTML){
            document.getElementById("regex").innerHTML = '';
        }
    }
}