const contact = () => {
    const contactInfo = (() => {
        const div = document.createElement("div");
        div.className = "contactform form";
        div.id = "Contact"
        document.getElementById("content").appendChild(div);
        const contactDiv = document.createElement("div");
        contactDiv.className = "contact-info";
        div.appendChild(contactDiv);
        const icon = document.createElement("i");
        icon.innerHTML = `<i class="fas fa-ice-cream"></i>`;
        contactDiv.appendChild(icon);

        const h2 = document.createElement("h2");
        h2.innerText = "Contact Us";
        contactDiv.appendChild(h2);
        const contactInfo = document.createElement("p");
        contactInfo.innerText = `Phone: 555-555-5555
        Email Address: summerbites@emailtime.com
        Website: summerbites.com`;
        contactDiv.appendChild(contactInfo);

        const summerImg = document.createElement("img");
        summerImg.className = "imgs"
        summerImg.src = "images/summertheme.jpeg";
        contactDiv.appendChild(summerImg);
    })()
}

export default contact;
