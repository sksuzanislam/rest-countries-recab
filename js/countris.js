const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries)
    const countriseHTML = countries.map(country => getCountriesHTML(country));
    console.log(countriseHTML[0])
    const container = document.getElementById('countries');
    container.innerHTML = countriseHTML.join(' ')
}

const getCountriesHTML = ({ name, flags, area, region }) => {
    return `
    <div class=country>
    <h2>${name.common}</h2>
    <p>Area: ${area}</p>
    <p>Continet:${region}</p>
    <img src="${flags.png}">
    </div>
    `
}





// const getCountriesHTML = country => {
//     //option 1
//     const { name, flags } = country;
//     return `
//     <div class=country>
//     <h2>${name.common}</h2>
//     <img src="${flags.png}">
//     </div>
//     `
// }


//Orginal 
// const getCountriesHTML = country => {
//     return `
//     <div class=country>
//     <h2>${country.name.common}</h2>
//     <img src="${country.flags.png}">
//     </div>
//     `
// }



loadCountries();