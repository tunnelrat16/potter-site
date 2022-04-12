const app = document.querySelector("#app")
const loading = document.querySelector(".loading")
const queryString = new URLSearchParams(window.location.search)
const house = `${queryString.get("house")}`
const houseTitleCase = `${house[0].toUpperCase()}${house.slice(1)}`

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

function createStudentList(parsedObject) {
    const li = document.createElement("li")
    li.textContent = parsedObject.name
    const ul = document.querySelector(".students")
    ul.append(li)
}



fetch(`http://hp-api.herokuapp.com/api/characters/house/${queryString.get("house")}`)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        createDiv(parsedResponse)
        parsedResponse.forEach(parsedResponse => {
            createStudentList(parsedResponse)
        })
    }).catch(error => {
        console.error(error.message)
    })