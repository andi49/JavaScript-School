const form = document.querySelector('form')
try {
const fetchApi =  async () => {
const name = document.querySelector('getCountryFlag')
const URL = `https://restcountries.com/v3.1/name/${name}`
const response = await fetch(URL);
const data = await response.json();

  return data;
} 
 
}catch (err) {
  console.error(err); }