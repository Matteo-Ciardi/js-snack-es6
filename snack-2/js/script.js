// # Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// ARRAY SQUADRE DI CALCIO
const teams = [
    {
        "nome": "Juventus",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Inter",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Milan",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Roma",
        "punti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Napoli",
        "punti": 0,
        "falliSubiti": 0
    },
]

const pointsFouls = [];

function randomNumGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < teams.length; i++) {
    teams[i].punti = randomNumGen(0, 100);
    teams[i].falliSubiti = randomNumGen(50, 500);
    pointsFouls.push(teams[i].nome);
    pointsFouls.push(teams[i].falliSubiti);
}

console.log(pointsFouls);
