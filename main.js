/*
<div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">`${name}</h5>
                <ul class="card-text">
                    <li>`${height}`</li>
                    <li>`${mass}`</li>
                    <li>`${birth_year}`</li>
                    <li>`${gender}`</li>
                </ul>
            </div>
        </div>
*/

const api_url = "https://swapi.info/api/people";
const rowEl = document.querySelector(".row");
fetch(api_url)
    .then((res => res.json()))
    .then((characters) => {
        console.log(characters);
        characters.forEach(character => {
            const { name, height, mass, birth_year, gender } = character;
            const divEl = document.createElement("div");
            divEl.className = "col-md-4 py-2";
            divEl.innerHTML =
                `<div class="card">
                <div class="card-header"><h3>${name}</h3>
                </div>
                <div class="card-body">
                    <ul class="card-text list-unstyled">
                        <li><b>Height</b>: ${height}</li>
                        <li><b>Mass</b>: ${mass}</li>
                        <li><b>Birth Year</b>: ${birth_year}</li>
                        <li><b>Gender</b>: ${gender}</li>
                    </ul>
                </div>
            </div>`;
            rowEl.appendChild(divEl)
            if (character.films.length > 0) {
                character.films.forEach(film => {
                    fetch(film)
                        .then((res => res.json()))
                        .then((filmData) => {
                            console.log("film", name, filmData);
                        })
                })
            }
            if (character.starships.length > 0) {
                character.starships.forEach(starship => {
                    fetch(starship)
                        .then((res => res.json()))
                        .then((starshipData) => {
                            console.log("starship", name, starshipData);
                        })
                })
            }
        });
    })
    .catch((error) => console.error(error.message))

