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

function getRandomFigure() {
    let rand = Math.random() * 100;
    let sum = 0;
    for (let i = 0; i < figures.length; i++) {
        sum += figures[i].chance;
        if (rand <= sum) {
            return figures[i];
        }
    }
    return figures[figures.length - 1]
}
function openBox() {
    const figure = getRandomFigure();
    const img = document.getElementById("figure-img");
    const name = document.getElementById("figure-name");
    const rarity = document.getElementById("figure-rarity");
    img.style.opacity = "0";
    img.style.transform = "scale(0.8)";
    img.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    setTimeout(() => {
        img.src = figure.img;
        img.alt = figure.name;
        name.textContent = figure.name;
        rarity.textContent = figure.rarity;
        img.style.opacity = "1";
        img.style.transform = "scale(1)";
    }, 300);

}
