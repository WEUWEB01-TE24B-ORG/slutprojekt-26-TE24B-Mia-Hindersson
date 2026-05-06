const figures = [
    {
        name: "Birdy",
        img: "./bilder/birdy.webp",
        rarity: "Common",
        rarityClass: "rarity-common",
        chance: 58
    },
    {
        name: "Sardine",
        img: "./bilder/sardine.webp",
        rarity: "Rare",
        rarityClass: "rarity-rare",
        chance: 30
    },
    {
        name: "House",
        img: "./bilder/house.webp",
        rarity: "SECRET",
        rarityClass: "rarity-secret",
        chance: 10
    },
    {
        name: "Snoopy",
        img: "./bilder/snoopy.webp",
        rarity: "ULTRA SECRET",
        rarityClass: "rarity-ultra-secret",
        chance: 2
    }
];
let opencount = 0;
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
    opencount++;
    const img = document.getElementById("figure-img");
    const name = document.getElementById("figure-name");
    const rarity = document.getElementById("figure-rarity");
    const counter = document.getElementById("open-counter");
    if (counter) counter.textContent = "boxes opened: " + opencount;

    img.classList.remove("shake");
    void img.offsetWidth;
    img.classList.add("shake");

    document.querySelectorAll(".card, .possible-card").forEach(c => c.classList.remove("winner"));

    img.style.opacity = "0";
    img.style.transform = "scale(0.8)";
    img.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    setTimeout(() => {
        img.src = figure.img;
        img.alt = figure.name;
        name.textContent = figure.name;
        rarity.textContent = figure.rarity;

        rarity.className = "figure-rarity " + figure.rarityClass;

        img.style.opacity = "1";
        img.style.transform = "scale(1)";

        document.querySelectorAll(".card, .possible-card").forEach(card => 
        {
            const cardimg = card.querySelector("img");
            if (cardimg && cardimg.alt.toLowerCase() === figure.name.toLowerCase()){
                card.classList.add("winner");
            }
        });
    }, 300);

}
