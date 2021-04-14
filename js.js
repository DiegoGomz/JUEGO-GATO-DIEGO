


let turno = true;

const botones = document.querySelectorAll(".cuadro");
const reiniciar = document.querySelector("#Reiniciar");
let continuar = true;
let ganadasx = 0;
let ganadaso = 0;
let empates = 0;

function update() {
    document.querySelector("#marcadorx").textContent = ganadasx;
    document.querySelector("#marcadoro").textContent = ganadaso;
    document.querySelector("#marcadorm").textContent = empates;

}

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", (e) => {

        if (turno && e.target.innerHTML === "" && continuar) {
            contador++;
            e.target.innerHTML = "O";
            turno = !turno;
            if (ganador() === 0) {
                document.querySelector("body").classList.add("hex1");
                ganadaso++;
                document.querySelector("#ganador").textContent = "EL GANADOR FUE O";
                update()
            }
        } else if (e.target.innerHTML === "" && continuar) {
            contador++;
            e.target.innerHTML = "X";
            turno = !turno;
            if (ganador() === 1) {
                document.querySelector("body").classList.add("hex2");
                ganadasx++;
                document.querySelector("#ganador").textContent = "EL GANADOR FUE X";
                update()
            }

        }
        if (ganador() === -1) {
            empates++;
            update()
            document.querySelector("#ganador").textContent = "NO HAY GANADOR";
        }


    });

}

reiniciar.addEventListener("click", (e) => {
    document.querySelector("body").classList.remove("hex1");
    document.querySelector("body").classList.remove("hex2");
    continuar = true;
    contador = 0;
    document.querySelector("#ganador").textContent = "";
    for (let i = 0; i < botones.length; i++) {
        botones[i].innerHTML = "";
    }
});

const lista = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let contador = 0;

function ganador() {

    for (let i = 0; i < lista.length; i++) {

        if (botones[lista[i][0]].innerHTML === "X" && botones[lista[i][1]].innerHTML === "X" && botones[lista[i][2]].innerHTML === "X") {
            continuar = false;
            return 1;

        } else if (botones[lista[i][0]].innerHTML === "O" && botones[lista[i][1]].innerHTML === "O" && botones[lista[i][2]].innerHTML === "O") {
           
            continuar = false;
            return 0;

        }


    }
    if (contador === 9) {
        continuar = false;
        return -1;
    }
}