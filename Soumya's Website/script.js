let currLang='en'
updateTextContent(currLang)

document.getElementById('lang-select').addEventListener('change', (event) => {
    currLang = event.target.value
    updateTextContent(currLang)
})

function updateTextContent(language) {
    if (document.body.classList.contains('dark-mode')) {
        document.getElementById('theme-toggle').textContent=langData[language].brightMode
    }
    else {
        document.getElementById('theme-toggle').textContent=langData[language].darkMode
    }
    document.getElementById('welcome').textContent=langData[language].welcome
    document.getElementById('personal-details').textContent=langData[language].personalDetails
    document.getElementById('name').textContent=langData[language].name
    document.getElementById('father').textContent=langData[language].father
    document.getElementById('mother').textContent=langData[language].mother
    document.getElementById('address').textContent=langData[language].address
    document.getElementById('district').textContent=langData[language].district
    document.getElementById('pin').textContent=langData[language].pin
    document.getElementById('state').textContent=langData[language].state
    document.getElementById('date-of-birth').textContent=langData[language].dateOfBirth
    document.getElementById('qualifications').textContent=langData[language].qualifications
    document.getElementById('degree').textContent=langData[language].degree
    document.getElementById('institution').textContent=langData[language].institution
    document.getElementById('parent-institution').textContent=langData[language].parentInstitution
    document.getElementById('grade').textContent=langData[language].grade
    document.getElementById('btech').textContent=langData[language].btech
    document.getElementById('aot').textContent=langData[language].aot
    document.getElementById('makaut').textContent=langData[language].makaut
    document.getElementById('cgpa').textContent=langData[language].cgpa
    document.getElementById('higher-secondary').textContent=langData[language].higherSecondary
    document.getElementById('hs-school').textContent=langData[language].school
    document.getElementById('wbchse').textContent=langData[language].wbchse
    document.getElementById('hs-percent').textContent=langData[language].hsPercent
    document.getElementById('madhyamik').textContent=langData[language].madhyamik
    document.getElementById('mp-school').textContent=langData[language].school
    document.getElementById('wbbse').textContent=langData[language].wbbse
    document.getElementById('mp-percent').textContent=langData[language].mpPercent
    document.getElementById('expertise').textContent=langData[language].expertise
    document.getElementById('web-dev').textContent=langData[language].webDev
    document.getElementById('soft-dev').textContent=langData[language].softDev
    document.getElementById('graphics').textContent=langData[language].graphics
    document.getElementById('os').textContent=langData[language].os
    document.getElementById('others').textContent=langData[language].others
    document.getElementById('hobbies').textContent=langData[language].hobbies
    document.getElementById('contact').textContent=langData[language].contact
    document.getElementById('personal-email').textContent=langData[language].personalEmail
    document.getElementById('academic-email').textContent=langData[language].academicEmail
    document.getElementById('phone').textContent=langData[language].phone
    document.getElementById('websites').textContent=langData[language].websites
    document.getElementById('fb').textContent=langData[language].fb
    document.getElementById('gh').textContent=langData[language].gh
    document.getElementById('li').textContent=langData[language].li
    document.getElementById('ex').textContent=langData[language].ex
}

document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark')
        document.getElementById('theme-toggle').textContent=langData[currLang].brightMode
    } else {
        localStorage.setItem('theme', 'light')
        document.getElementById('theme-toggle').textContent=langData[currLang].darkMode
    }
})
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode')
    }
})