enviar.addEventListener('click', tabuada)
function tabuada(){
   
    const numero = parseInt(document.getElementById('num').value);
    const resul = document.getElementById('resul');
    resul.textContent = "";
    
    for (let i = 0; i <= 10; i++) {
       
        var resultado = numero * i;
        const p = document.createElement("p");

        p.textContent = `Número: ${numero} x ${i}
        = ${resultado}`;

        resul.appendChild(p);
    }
}