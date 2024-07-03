const goal = 70;
let currentCases = 0;
let progressBar = 0;

let caseInput = document.getElementById('caseInput');
const enterCaseBtn = document.getElementById('enterCase');
let casesList = document.getElementById('cases-list');

// Cargar casos de la lista al recargar la pagina
window.addEventListener('load', () => {
    const storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
    storedCases.forEach(caseText => {
        const newCase = document.createElement('li');
        newCase.textContent = caseText;
        casesList.appendChild(newCase);
    })
} )

// Agregar elemento a la lista de casos al presionar boton
enterCaseBtn.addEventListener('click', () => {
    const newCase = document.createElement('li')
    let caseText = caseInput.value.trim();
    newCase.textContent = caseText;
    casesList.appendChild(newCase);

    // Guardar elemento en localStorage
    const storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
    storedCases.push(newCase.textContent);
    localStorage.setItem('cases', JSON.stringify(storedCases));

    caseInput.value = '';
});


// Cada vez que se agregue un elemento a la lista de casos, se debe agregar una unidad en current cases


// Debe haber un boton para limpiar la lista de casos del dia para el inicio de un nuevo dia de produccion, al eliminar la lista del dia, la lista debe guardarse en un dia especifico para llevar registro de la produccion de cada dia

function clearDay(){
    localStorage.clear();
    while (casesList.firstChild){
        casesList.removeChild(casesList.firstChild)
    }
};

const clearDayBtn = document.getElementById('clearDay');
clearDayBtn.addEventListener('click', clearDay);



