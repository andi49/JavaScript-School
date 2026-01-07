import {CountryCard} from './country.js'

// const country = new CountryCard('Sweden', 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg')

// console.log(country)

// country.createCard(document.body)

async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}


getCountries('spanish')
    .then( countries =>{
        console.log(countries);

        const countryCards = countries.map( ({name, flags}) => new CountryCard(name.common, flags.png) )

        console.log(countryCards);

        countryCards.forEach( card => card.displayCard(document.body))
    })