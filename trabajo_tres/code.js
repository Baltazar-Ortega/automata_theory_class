function validate(str) {

    let index_abgo = parseInt(str.indexOf("a"));
    console.log('index abgo', index_abgo);
    const subStrAbgo = str.slice(0, index_abgo);
    console.log('Valor subStrAbgo', subStrAbgo);
    const arr_970 = subStrAbgo.match(/970/ig);
    console.log('arr_970', arr_970);
    const n = arr_970.length;
    let strToMatch = '^(970){' + n+','+n+'}(abgo){'+((2*n)+1)+','+((2*n)+1)+'}(970){'+(2+n)+','+(2+n)+'}$';
    console.log('String to match', strToMatch);

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