const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
exchangeIcon = document.querySelector(".exchange"),
selectTag = document.querySelectorAll("select"),
icons = document.querySelectorAll(".row i"),
translateBtn = document.querySelector("button"),
statusText = document.querySelector(".status");

// Populate dropdowns
selectTag.forEach((tag, id) => {
    for (let country_code in countries) {
        let selected =
            id == 0
