const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//Add all event

eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
		});
		
		cardBody.addEventListener("click", deleteFilm);
		clear.addEventListener("click",clearAllFilms);
}
function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" | director === "" | url === ""){
        UI.displayMessages("Tüm alanlar doldurulmalıdır...!","danger");
    }
    else{
        // Create new film obj
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm); 

        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Kayıt başarıyla eklendi.","success")

    }
    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e){

	if( e.target.id === "delete-film"){
		if(confirm("emin misiniz?")){
			UI.deleteFilmFromUI(e.target);

			// send film title 
			Storage.deleteFilmFromeStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
			UI.displayMessages("Silme işlemi başarılı..","success");
		}
	}
}
function clearAllFilms(){

	if(confirm("Tüm filimleri silmek istediğinize Emin misiniz ?")){
		UI.clearAllFilmsFromUI();
		Storage.clearAllFilmsFromStorage();
	}

}