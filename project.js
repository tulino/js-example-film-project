const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
// Started UI object
const ui = new Ui();

//Add all event

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" | director === "" | url === ""){
        ui.displayMessages("Tüm alanlar doldurulmalıdır...!","danger");
    }
    else{
        // Create new film obj
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); 
        ui.displayMessages("Kayıt başarıyla eklendi.","success")

    }
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}
