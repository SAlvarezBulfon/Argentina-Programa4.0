fetch('https://randomuser.me/api/')
.then(response =>response.json())
.then(data => mostrarData(data))
//.then(data => console.log(data.results[0].name))
.catch(error => console.log(error))

let title = document.getElementById('title');
let nombre = document.getElementById('name');
let img = document.getElementById('about-img');
const mostrarData = (data) => {
    console.log(data.results[0]);

    title.innerHTML = `${data.results[0].name.first}  ${data.results[0].name.last}`;
    nombre.innerHTML = `${data.results[0].name.first}  ${data.results[0].name.last}`;
    img.src = `${data.results[0].picture.large}`;
}



// --------------- CAMBIAR ENTRE LA SECCIÓN DE ESTUDIOS Y TRABAJO---------------
const tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

        tabs.forEach(tab => tab.addEventListener('click', (e) => {
                const target = document.querySelector(tab.dataset.target);
                tabContents.forEach(content => content.classList.remove('experience-active'));
                target.classList.add('experience-active');
                tabs.forEach(tab1=>{
                        tab1.classList.remove('experience-active');
                })
                tab.classList.add('experience-active');
        }));
