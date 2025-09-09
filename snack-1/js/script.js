// # Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

// ARRAY DI OGGETTI
const bikes = [
    {
        "nome": "Canyon",
        "peso": 8
    },

    {
        "nome": "Scott",
        "peso": 10
    },

    {
        "nome": "Specialized",
        "peso": 6
    },

    {
        "nome": "Bianchi",
        "peso": 9
    },

    {
        "nome": "Trek",
        "peso": 7
    }
]

let lighterBike = bikes[0]

for (const i in bikes) {
    if (bikes[i].peso < lighterBike.peso) {
        lighterBike = bikes[i];
    }
}

console.log(lighterBike.nome, lighterBike.peso);