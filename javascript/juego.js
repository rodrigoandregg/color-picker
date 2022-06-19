let numeroMaquina = Math.floor(Math.random() * (10 - 1)) + 1;

console.log(numeroMaquina);

let vidas = 3;

let numeroUsuario = parseInt(prompt("adivine el numero del 1 al 10"));

while (numeroMaquina !== numeroUsuario && vidas > 1) {
    let mensaje =
        numeroMaquina > numeroUsuario
            ? "el numero es mayor"
            : "el numero es menor";

    alert("te equivocaste! " + mensaje);
    numeroUsuario = parseInt(prompt("numero del 1 al 10"));
    vidas--;
}

if (numeroMaquina === numeroUsuario) {
    alert("ganaste");
} else {
    alert("perdiste");
}
