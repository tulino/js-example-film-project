const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
// Started UI object
const ui = new Ui();

// Create storage obj
const storage = new Storage();

//Add all event

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
		});
		
		cardBody.addEventListener("click", deleteFilm);
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

        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Kayıt başarıyla eklendi.","success")

    }
    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){

	if( e.target.id === "delete-film"){
		ui.deleteFilmFromUI(e.target);

		// send film title 
		storage.deleteFilmFromeStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
		ui.displayMessages("Silme işlemi başarılı..","success");
	}
}
