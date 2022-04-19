const loader = document.querySelector(".loader")
const queryString = new URLSearchParams(window.location.search)
const characterName = `${queryString.get("student")}`


function createDiv() {
    const div = document.createElement("div")
    div.classList.add("character")
    div.innerHTML = `
    <h2>Character Details</h2>
        <ul class="character"></ul>
    `
    const main = document.querySelector("main")
    main.append(div)
}

function listImage(parsedObject) {
    if (parsedObject.image === "") {
        const li = document.createElement("li")
        const ul = document.querySelector(".character")
        li.innerHTML = `
        <span> Name: ${parsedObject.name} </span>
`
        ul.append(li)
    } else {
        const div = document.createElement("div")
        div.classList.add("picture")
        const ul = document.querySelector(".character")
        div.innerHTML = `
        <figure>
            <img class="mainpic" src="${parsedObject.image}" alt="${characterName}" />
            <figcaption>${characterName}</figcaption>
        </figure>
    `
        ul.append(div)
    }
}

function listHouse(parsedObject) {
    const li = document.createElement("li")
    const ul = document.querySelector(".character")
    li.innerHTML = `
        <span> House: ${parsedObject.house} </span>
`
    ul.append(li)
}

function listAncestry(parsedObject) {
    const li = document.createElement("li")
    const ul = document.querySelector(".character")
    if (parsedObject.ancestry === "") {
        li.innerHTML = `
        <span> Ancestry: Unknown </span>
`
    } else {
        const ancestryTitleCase = `${parsedObject.ancestry[0].toUpperCase()}${parsedObject.ancestry.slice(1)}`
        li.innerHTML = `
        <span> Ancestry: ${ancestryTitleCase} </span>
`
    }
    ul.append(li)
}

function listWand(parsedObject) {
    const li = document.createElement("li")
    const ul = document.querySelector(".character")
    if (parsedObject.wand.wood === "") {
        li.innerHTML = `
        <span> Wand: Unknown </span>
`
    } else {
        const woodTitleCase = `${parsedObject.wand.wood[0].toUpperCase()}${parsedObject.wand.wood.slice(1)}`
        li.innerHTML = `
        <span> Wand: ${woodTitleCase} - ${parsedObject.wand.core} </span>
`
    }
    ul.append(li)
}

function listPatronus(parsedObject) {
    const li = document.createElement("li")
    const ul = document.querySelector(".character")
    if (parsedObject.patronus === "") {
        li.innerHTML = `
        <span> Patronus: Unknown </span>
`
    } else {
        const patronusTitleCase = `${parsedObject.patronus[0].toUpperCase()}${parsedObject.patronus.slice(1)}`
        li.innerHTML = `
        <span> Patronus: ${patronusTitleCase} </span>
`
    }
    ul.append(li)
}


fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        createDiv(parsedResponse)
        parsedResponse.forEach(parsedResponse => {
            if (parsedResponse.name == characterName) {
                listImage(parsedResponse)
                listHouse(parsedResponse)
                listAncestry(parsedResponse)
                listWand(parsedResponse)
                listPatronus(parsedResponse)
                console.log(parsedResponse)
            }
        })
    }).catch(error => {
        console.error(error.message)
    })