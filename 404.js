const $form = document.querySelector("form")

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const charName = formData.get("name");

    fetch("http://hp-api.herokuapp.com/api/characters")
        .then(response => {
            return response.json()
        }).then(parsedResponse => {
            parsedResponse.find(parsedResponse => {
                if (parsedResponse.name == charName) {
                    location.assign(`student.html?student=${charName}`);
                    end
                } else {
                    location.assign('404.html');
                }
            }).catch(error => {
                console.error(error.message);
            })
        })
})