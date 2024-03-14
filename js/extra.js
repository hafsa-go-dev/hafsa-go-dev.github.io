window.addEventListener("DOMContentLoaded", () => {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        darkMode();
    } else {
        lightMode();
    }
});

document.querySelector("#light-mode").addEventListener("click", lightMode);
document.querySelector("#dark-mode").addEventListener("click", darkMode);

function lightMode() {
    document.querySelector("html").setAttribute("data-bs-theme", "light");
    localStorage.setItem("theme", "light");

    for (let i in document.getElementsByTagName("svg")) {
        if (!isNaN(i) === true) {
            document.getElementsByTagName("svg")[i].classList.remove("dark");
            document.getElementsByTagName("svg")[i].classList.add("light");
        }
    }
    document.querySelector(".first-box").classList.remove("text-bg-secondary");
    document.querySelector(".first-box").classList.add("text-bg-light");


}

function darkMode() {
    document.querySelector("html").setAttribute("data-bs-theme", "dark");
    localStorage.setItem("theme", "dark");

    for (let i in document.getElementsByTagName("svg")) {
        if (!isNaN(i) === true) {
            document.getElementsByTagName("svg")[i].classList.remove("light");
            document.getElementsByTagName("svg")[i].classList.add("dark");
        }
    }
    document.querySelector(".first-box").classList.remove("text-bg-light");
    document.querySelector(".first-box").classList.add("text-bg-secondary");
}