const queryString = new URLSearchParams(window.location.search)
const house = `${queryString.get("house")}`
const houseTitleCase = `${house[0].toUpperCase()}${house.slice(1)}`

const body = document.querySelector("body")
body.classList.add(house)

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
    if (parsedObject.name == "James Potter") {
        li.innerHTML = `
        <figcaption><a href="404.html">
        ${parsedObject.name}</a></figcaption>
    `
    } else if (parsedObject.name == "Lily Potter") {
        li.innerHTML = `
        <figcaption><a href="404.html">
        ${parsedObject.name}</a></figcaption>
    `
    } else {
        li.innerHTML = `
    <figcaption><a href="student.html?student=${parsedObject.name}">
    ${parsedObject.name}</a></figcaption>
`
    }
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