function Ui(){

}
Ui.prototype.addFilmToUI = function(newFilm){
    
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    `;
}
Ui.prototype.clearInputs = function(element1,element2, element3){
	element1.value = "";
	element2.value = "";
	element3.value = "";
}
Ui.prototype.displayMessages = function(message,type){
	const cardBody = document.querySelector(".card-body");

	const div = document.createElement("div");

	div.className = `alert alert-${type}`;
	div.textContent = message;

	cardBody.appendChild(div);

	setTimeout(function(){
		div.remove();
	},2000);
}

Ui.prototype.loadAllFilms = function(films){
	const filmList = document.getElementById("films");

	films.forEach(function(film){
		filmList.innerHTML += `
			<tr>
					<td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
					<td>${film.title}</td>
					<td>${film.director}</td>
					<td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
			</tr>

		`;

	})

}
Ui.prototype.deleteFilmFromUI = function(element){
	
	element.parentElement.parentElement.remove();
}

Ui.prototype.clearAllFilmsFromUI = function(){
	const filmList = document.getElementById("films");
	filmList.innerHTML = ``;

	/* feast method for clear 
	while(filmList.firstElementChild !== null){
		filmList.firstElementChild.remove();
	} */

}