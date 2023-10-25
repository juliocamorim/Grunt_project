document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function() {
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseint(numeroMaximo);

        let numeroAleatorio = Match.random() * numeroMaximo;
        alert(numeroAleatorio);
    })
})