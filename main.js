const goal = 70;
let casesNumber = parseInt(localStorage.getItem('casesNumber')) || 0;
let progressBar = 0;

let caseInput = document.getElementById('caseInput');
const enterCaseBtn = document.getElementById('enterCase');
let casesList = document.getElementById('cases-list');
let currentCases = document.getElementById('currentCases');
const removeCaseBtn = document.getElementById('removeCase');

const storedCases = JSON.parse(localStorage.getItem('cases') || '[]');

// Cargar casos de la lista al recargar la pagina
window.addEventListener('load', () => {
    
    storedCases.forEach(caseText => {
        const newCase = document.createElement('li');
        newCase.textContent = caseText;
        casesList.appendChild(newCase);
    });

    currentCases.innerHTML = casesNumber;

    updateProgressBar();
})

function updateProgressBar(){
    const percentage = (casesNumber / goal) * 100;
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = `${percentage}%`;
}

function addCase(){
    const newCase = document.createElement('li')
    let caseText = caseInput.value.trim();
    if(caseText === '') return;
    
    newCase.textContent = caseText;
    casesList.appendChild(newCase);

    let caseSum = casesNumber += 1;
    currentCases.innerHTML = caseSum;

    const elemento = document.querySelector('.animacion');
        elemento.classList.remove('animacion');
        void elemento.offsetWidth;
        elemento.classList.add('animacion');

    // Guardar elemento en localStorage
    let storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
    storedCases.push(newCase.textContent);
    localStorage.setItem('cases', JSON.stringify(storedCases));
    localStorage.setItem('casesNumber', casesNumber);

    updateProgressBar();

    caseInput.value = '';
}
// Agregar elemento a la lista de casos al presionar boton
enterCaseBtn.addEventListener('click', addCase);

caseInput.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
        addCase();
    }
})

function removeCase(){
    
    if (casesList.lastChild){
        const lastCaseText = casesList.lastChild.textContent;
        casesNumber -= 1;
        currentCases.innerHTML = casesNumber;
        casesList.removeChild(casesList.lastChild);


        let storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
        storedCases = storedCases.filter(caseText => caseText !== lastCaseText);
        localStorage.setItem('cases', JSON.stringify(storedCases));
        localStorage.setItem('casesNumber', casesNumber);

        updateProgressBar();
    }
}


removeCaseBtn.addEventListener('click', removeCase);

// Cada vez que se agregue un elemento a la lista de casos, se debe agregar una unidad en current cases


// Debe haber un boton para limpiar la lista de casos del dia para el inicio de un nuevo dia de produccion.

function clearDay(){
    let borrar = prompt("Estas seguro que quieres eliminar la produccion del dia?");
    if(borrar === 'borrar'){
        localStorage.clear();
        while (casesList.firstChild){
            casesList.removeChild(casesList.firstChild)
        }
        casesNumber = 0;
        currentCases.innerHTML = casesNumber;
        updateProgressBar();
    }
};
const clearDayBtn = document.getElementById('clearDay');
clearDayBtn.addEventListener('click', clearDay);

const generateReportButton = document.getElementById("generate-report");

// GENERAR REPORTE DE PRODUCCION DIARIA
generateReportButton.addEventListener("click", () => {
    let date = new Date().toLocaleDateString();
    const storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
    const reportContent = `Production Report\nDate: ${date}\nGoal: ${goal}\nTotal Cases Completed: ${casesNumber}\nCases:\n${storedCases.join("\n")}`;
    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${date}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
