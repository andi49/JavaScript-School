import _ from "https://cdn.jsdelivr.net/npm/underscore@1.13.7/underscore-esm-min.js ";

async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}

getCountries('Russian')
    .then( countries =>{
        // console.log(countries)


        // const nameArray = countries.map(
        //      country => {
        //     console.log(country)
        //     return country.name
        // } )

        const nameArray = _.pluck(countries, 'name')

        console.log(nameArray)


          const highestPopulation = _.max(countries, country => country.population);
            console.log(highestPopulation)

            const lowestPopulation = _.min(countries, country => country.population);
            console.log(lowestPopulation)

            const sortbyRegio = _.sortBy(countries, 'population')
            console.log(sortbyRegio)

            const sortGroupCs = _.groupBy(countries, 'continents')
            console.log(sortGroupCs)

    })