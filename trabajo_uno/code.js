function validate(str) {
    if (str.match(/^1887970\w*(abgo)+\w*\.$/)) { 
        console.log('The string: '+ str + ' matches the regular expression');
        document.getElementById("boton").style.backgroundColor = 'green';
        document.getElementById("boton").style.color = 'white';
        document.getElementById("boton").value = 'Valida';
    }else{
        document.getElementById("boton").style.backgroundColor = 'red';
        document.getElementById("boton").style.color = 'white';
        document.getElementById("boton").value = 'Invalida';
    }
    console.log(str);
}