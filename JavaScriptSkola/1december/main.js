///// Objects & Methods - Agenda


/// STRING 

const string1 = 'Den spanska räven'

console.log(string1.length) /// Engenskapen på stringen

const string2 = 'rev en annan räv'
const string3 = string1.concat(' ', string2) // Metod som lägger ihop string1 och argumeent till en ny sting

console.log(string3)
const fakeh1 = document.querySelector('#strings')
fakeh1.innerHTML = string3
/// STRING END


/// ARRAY

const lander = ['Sweden', 'Norway', 'Findland']

console.log(lander.length)

lander.push('Island')
const fakeh2 = document.querySelector('#landers')
fakeh2.innerHTML = lander

/// ARRAY END

/// MATH

console.log(Math.PI) /// 

console.log(Math.round(6.78))

/// MATH END

