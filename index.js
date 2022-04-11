const url = "http://hp-api.herokuapp.com/api/characters/students";


fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {
        console.log(parsedResponse) // "pikachu"
    })