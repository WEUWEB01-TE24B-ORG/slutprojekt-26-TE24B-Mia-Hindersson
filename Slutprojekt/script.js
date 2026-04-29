const figures = [
    {
        name: "Birdy",
        img: "./bilder/birdy.png",
        rarity: "Common",
        chance: 58
    },
    {
        name: "Sardine",
        img: "./bilder/sardine.png",
        rarity: "Rare",
        chance: 30
    },
    {
        name: "House",
        img: "./bilder/house.png",
        rarity: "SECRET",
        chance: 10
    },
    {
        name: "Snoopy",
        img: "./bilder/snoopy.png",
        rarity: "ULTRA SECRET",
        chance: 2
    }
];

function getrandomfigure() {
    let rand = Math.random() * 100;
    let sum = 0;

    for (let i = 0; i < figures.length; i++) {
        sum += figures[i].chance;
        if (rand <= sum) {
            return figures[i];
        }
    }
}
function openbox() {
    const img = document.getElementsByClassName("figure-img").src = figures.img
    const name = document.getElementsByClassName("figure-name").textContent = figures.text
    const rarity = document.getElementsByClassName("figure-rarity").textContent = figures.rarity
}