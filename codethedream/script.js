let el = document.getElementById("wrapper");
let persons = document.querySelector("#persons");

window.onload = async () => {
   await getPage();
   await fetchData();
   await renderPage()
}
 

let user_data = [];
let page = 1;

function getPage() {
  page = Number(location.hash.slice(1)) || page;
}
window.onhashchange = async () => {
    await getPage();
    await renderPage()
 };
async function fetchData() {
  user_data = await fetch("https://www.swapi.tech/api/people");
  user_data = await user_data.json();
  user_data = user_data.results;
}

function renderPage() {
  console.log(user_data);
persons.innerHTML = '';

  for (let user of user_data) {
    persons.innerHTML += `<div>
        <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${user.url} </h5>
                  <p class="card-text">${user.name}</p>
                  <p class="card-text"><small class="text-muted">${user.uid}</small></p>
                </div>
              </div>
        </div>
   `;
  }

  
}


// toggleButton.onclick = function () {
//   el.classList.toggle("toggled");
// };
