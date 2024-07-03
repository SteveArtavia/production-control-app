const casesContainer = document.getElementById('cases-container');

window.addEventListener('load', () => {
    const storedCases = JSON.parse(localStorage.getItem('cases') || '[]');
    storedCases.forEach(caseText => {
        const newCase = document.createElement('p');
        newCase.textContent = caseText;
        casesContainer.appendChild(newCase);
    });
})