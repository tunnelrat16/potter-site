const loading = document.querySelector(".loading")
const queryString = new URLSearchParams(window.location.search)
const characterName = `${queryString.get("student")}`
console.log(characterName)


function createDiv() {
    const div = document.createElement("div")
    div.classList.add("students")
    div.innerHTML = `
    <h2>${houseTitleCase} Students</h2>
        <ul class="students"></ul>
    `
    const main = document.querySelector("main")
    main.append(div)
}

function characterDetail(parsedObject) {
    const name = parsedObject.name
    const house = parsedObject.house
    const ancestry = parsedObject.ancestry
    const wand = parsedObject.wand.wood + "-" + parsedObject.wand.core
    const patronus = parsedObject.patronus
    const imageURL = parsedObject.image
    return console.log(name, house, ancestry, wand, patronus, imageURL)
}


fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        //createDiv(parsedResponse)
        parsedResponse.forEach(parsedResponse => {
            if (parsedResponse.name == characterName) {
                characterDetail(parsedResponse)
            }
        })
    }).catch(error => {
        console.error(error.message)
    })