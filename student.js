const loader = document.querySelector(".loader")
const queryString = new URLSearchParams(window.location.search)
const characterName = `${queryString.get("student")}`
console.log(characterName)


function createDiv() {
    const div = document.createElement("div")
    div.classList.add("students")
    div.innerHTML = `
    <h2>Students</h2>
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

// function createDetailList(parsedObject) {
//     const li = document.createElement("li")
//     li.innerHTML = `
//         <span> Image - ${parsedObject.image} </span>
//         <span> Name - ${parsedObject.name} </span>
//         <span> House - ${parsedObject.house} </span>
//         <span> Ancestry - ${parsedObject.ancestry} </span>
//         <span> Wand - ${parsedObject.wand.wood} + "-" + ${parsedObject.wand.core} </span>
//         <span> Patronus - ${parsedObject.patronus} </span>
//     `
//     const ul = document.querySelector(".students")
//     ul.append(li)
// }


fetch("http://hp-api.herokuapp.com/api/characters/students")
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        createDiv(parsedResponse)
        parsedResponse.forEach(parsedResponse => {
            if (parsedResponse.name == characterName) {
                characterDetail(parsedResponse)
            }
        })
    }).catch(error => {
        console.error(error.message)
    })