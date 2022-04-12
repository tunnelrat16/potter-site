const url = "http://hp-api.herokuapp.com/api/characters/house/slytherin";


fetch(url)
    .then(response => {
        return response.json()
    }).then(parsedResponse => {

    })