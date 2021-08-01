const home = () => {
    const header = (() => {
        const header = document.createElement("header");
        document.body.appendChild(header);

        const nav = document.createElement("nav");
        document.body.appendChild(nav);
        const homeBtn = document.createElement("button");
        homeBtn.className = "home btn"
        const menuBtn = document.createElement("button");
        menuBtn.className = "menu btn"
        const contactBtn = document.createElement("button");
        contactBtn.className = "contact btn"
        homeBtn.innerText = "Home", menuBtn.innerText = "Menu"
        contactBtn.innerText = "Contact";
        nav.appendChild(homeBtn);
        nav.appendChild(menuBtn);
        nav.appendChild(contactBtn);
        
        const h1 = document.createElement("h1");
        h1.innerText = "Summer Bites";
        h1.className = "header";
        document.querySelector("header").appendChild(h1);

        document.body.prepend(header, nav, document.getElementById("content"))
    })();
    const info = (() => {
        const div = document.createElement("div");
        div.className = "homeform form";
        div.id = "Home"
        document.getElementById("content").appendChild(div);
        const i = document.createElement("i");
        i.innerHTML = `<i class="fas fa-sun"></i>`
        div.appendChild(i)

        const h2 = document.createElement("h2");
        h2.innerText = "Welcome"
        div.appendChild(h2)
        const p = document.createElement("p");
        p.className = "text";
        p.innerText = `Summer Bites gives that glow of a long awaited summer of a life time. You will 
        have the memories of a life time and this will be the place where you want to be. So bring your friends, family and have a great time!`
        div.appendChild(p);

        const hTwo = document.createElement("h2");
        hTwo.innerText = "Schedule";
        div.appendChild(hTwo);
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const li2 = document.createElement("li");
        div.appendChild(ul);
        ul.appendChild(li);
        ul.appendChild(li2)
        li.innerText = "Mon-Thurs: 8am-12pm";
        li2.innerText = "Fri-Sun: 9am-10pm"
    })()
}

export default home;