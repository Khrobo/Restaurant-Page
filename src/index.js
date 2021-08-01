import home from "./home"
import menu from "./menu";
import contact from "./contact";

const initiate = (() => {
    home()
    menu()
    contact()
})() 

const tabSwitching = (() => {
    const tabs = (() => {
        document.querySelectorAll(".btn").forEach(e => {
            e.addEventListener("click", (event) => {
                const allBtns = document.querySelectorAll(".btn");
                const allForms = document.querySelectorAll(".form");

                for (let i = 0; i < allBtns.length; i++) {
                    if (event.target.innerText == allBtns[i].innerText) {
                        allBtns[i].style.background = "#236e96";
                        allBtns[i].style.color = "white";
                    } else {
                        allBtns[i].style.background = "transparent";
                        allBtns[i].style.color = "#15b2d3"
                    }
                }
                for (let i = 0; i < allForms.length; i++) {
                    if (event.target.innerText == allForms[i].id) {
                        allForms[i].style.display = "block";
                    } else {
                        allForms[i].style.display = "none";
                    }
                }
            })
        })
    })()
})()