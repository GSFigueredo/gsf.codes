function calcular(tipo, caractere) {
    if (tipo === 'acao') {

        if (caractere === 'c') {
            document.querySelector('input#result').value = '';
        }

        if (caractere === '+' || caractere === '/' || caractere === '*' || caractere === '-' || caractere === '.') {
            document.querySelector('input#result').value += caractere;
        } 
        
        console.log(document.querySelector('input#result').value)

        if (caractere === '=') {
            var valor_campo = eval(document.querySelector('input#result').value);
            document.querySelector('input#result').value = valor_campo;
        }

    } else if (tipo === 'valor') {

        document.querySelector('input#result').value += caractere;
    }
}
