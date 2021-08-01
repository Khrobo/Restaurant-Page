const menu = () => {
    const entree = (() => {
        const div = document.createElement("div");
        div.className = "menuform form";
        div.id = "Menu"
        document.getElementById("content").appendChild(div)
        const i = document.createElement("i");
        i.className = "umbrella"
        i.innerHTML = `<i class="fas fa-umbrella-beach"></i>`;
        document.querySelector(".menuform").appendChild(i);
        const h2 = document.createElement("h2");
        h2.className = "meal-header"
        h2.innerText = "Meals"
        document.querySelector(".menuform").appendChild(h2)
        const entreeH = document.createElement("h2");
        entreeH.className = "appetize-header";
        entreeH.innerText = "Appetizers";
        document.querySelector(".menuform").appendChild(entreeH);
        
        const parentDiv = document.createElement("div");
        parentDiv.className = "appetizers";
        div.appendChild(parentDiv)

        // Appetizer
        // Bocconcini
        const bocoDiv = document.createElement("div");
        parentDiv.appendChild(bocoDiv)
        bocoDiv.className = "boco"
        const bocoHead = document.createElement("h2");
        bocoHead.innerText = "Bocconcini"
        bocoDiv.appendChild(bocoHead)
        const bocoImg = new Image();
        bocoImg.className = "imgs";
        bocoImg.src = "../dist/images/boco.jpg";
        bocoDiv.appendChild(bocoImg);
        const bocoInfo = document.createElement("p");
        bocoInfo.innerText = `Creamy bocconcini is golden fried for an enticing crunch, and served with spicy tomato clip.`
        bocoDiv.appendChild(bocoInfo);

        // Chicken Skewers
        const skewerDiv = document.createElement("div");
        parentDiv.append(skewerDiv);
        skewerDiv.className = "skewer";
        const skewerHead = document.createElement("h2");
        skewerHead.innerText = "Chicken Skewers";
        skewerDiv.append(skewerHead);
        const skewerImg = new Image();
        skewerImg.className = "imgs";
        skewerImg.src = "../dist/images/skewers.jpeg";
        skewerDiv.appendChild(skewerImg);
        const skewerInfo = document.createElement("p");
        skewerInfo.innerText = `This wonderful Malay chicken dish creates flavour and excitement with simple cooking and just a few authentic ingredients.`
        skewerDiv.appendChild(skewerInfo);
    })();

    const mainCourse = (() => {
        const div = document.createElement("div");
        document.querySelector(".menuform").appendChild(div)
        div.className = "main";
        const h2 = document.createElement("h2");
        h2.innerText = "Main Course";
        h2.className = "courses"
        document.querySelector(".menuform").appendChild(h2)
        
        // Main
        // Thai
        const thaiDiv = document.createElement("div");
        thaiDiv.className = "thai";
        div.appendChild(thaiDiv);
        const thaiHead = document.createElement("h2");
        thaiHead.innerText = "Spicy Thai Basil Chicken";
        thaiDiv.appendChild(thaiHead);
        document.querySelector(".menuform").prepend(document.querySelector(".umbrella"),
        document.querySelector(".meal-header"),
        document.querySelector(".appetize-header"),
        document.querySelector(".appetizers"),
        document.querySelector(".courses"), 
        document.querySelector(".main"));

        const spicyImg = new Image();
        spicyImg.src = "../dist/images/thai.jpeg";
        spicyImg.className = "imgs"
        thaiDiv.appendChild(spicyImg);
        const thaiInfo = document.createElement("p");
        thaiDiv.appendChild(thaiInfo);
        thaiInfo.innerText = `This spicy thai dish has spectacular taste 
        even with the regular basil instead of holy basil. The sauce acts like a glaze as the chicken mixture cooks over high heat.`

        // Cardamom
        const mapleDiv = document.createElement("div");
        mapleDiv.className = "maple";
        div.appendChild(mapleDiv)
        const mapleHead = document.createElement("h2");
        mapleHead.innerText = "Cardamom Maple Salmon";
        mapleDiv.appendChild(mapleHead);

        const mapleImg = document.createElement("img");
        mapleImg.className = "imgs"
        mapleDiv.appendChild(mapleImg);
        mapleImg.src = "../dist/images/cardamom.jpeg";
        const mapleInfo = document.createElement("p");
        mapleDiv.appendChild(mapleInfo);
        mapleInfo.innerText = `A slightly exotic flavor of indian inspired
        with a maple twist. The flavor is exceptional, delicious, and unique.`
    })()

    const desserts = (() => {
        const div = document.createElement("div");
        document.querySelector(".menuform").appendChild(div);
        div.className = "desserts";
        const creamDiv = document.createElement("div");
        creamDiv.className = "cream";
        div.appendChild(creamDiv);
        const h2 = document.createElement("h2");
        h2.innerText = "Desserts";
        creamDiv.appendChild(h2);

        // Fried Ice Cream
        const creamHead = document.createElement("h2");
        creamHead.innerText = "Fried Ice Cream";
        creamDiv.appendChild(creamHead);

        const creamImg = document.createElement("img");
        creamImg.className = "imgs";
        creamImg.src = "../dist/images/icecream.jpeg";
        creamDiv.appendChild(creamImg);
        const creamInfo = document.createElement("p");
        creamInfo.innerText = `The perfect ice cream without the deep frying mess! Creamy vanilla ice cream is formed into rounds, then rolled through a sauteed buttery cinnamon cornflake topping and finished with chocolate
        or caramel sauce.`;
        creamDiv.appendChild(creamInfo)

        // Oreo Truffles
        const oreoDiv = document.createElement('div');
        oreoDiv.className = "oreo";
        div.appendChild(oreoDiv);
        const oreoHead = document.createElement("h2");
        oreoHead.innerText = "Oreo Truffles";
        oreoDiv.appendChild(oreoHead);

        const oreoImg = new Image();
        oreoImg.className = "imgs";
        oreoImg.src = "../dist/images/truffles.jpeg";
        oreoDiv.appendChild(oreoImg);
        const oreoInfo = document.createElement("p");
        oreoInfo.innerText = `Oreos, cream cheese, and white chocolate
        chips are a match made in dessert heaven.`;
        oreoDiv.appendChild(oreoInfo);
    })()
}

export default menu;