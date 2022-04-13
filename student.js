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

function createStudentList(parsedObject) {
    const li = document.createElement("li")
    li.innerHTML = `
        <figcaption><a href="student.html?student=${parsedObject.name}">
        ${parsedObject.name}</a></figcaption>
    `
    const ul = document.querySelector(".students")
    ul.append(li)
}
fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        //createDiv(parsedResponse)
        parsedResponse.forEach(parsedResponse => {
            // createStudentList(parsedResponse)
            console.log(parsedResponse)
        })
    }).catch(error => {
        console.error(error.message)
    })