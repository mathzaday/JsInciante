enviar.addEventListener('click', send)

function send(){
    const result = document.getElementById('resul');
    const num = document.getElementById('numero').value;

    for (let i = 1; i <= 10; i++){

        let resultado = num * i

        const line = document.createElement('p')

        line.textContent = `Número ${num} x ${i} = ${resultado}`
        
        result.appendChild(line)
    }
    numero.value ()
}