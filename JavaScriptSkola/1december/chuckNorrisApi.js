async function getCatergories() 
 {
   const URL = 'https://api.chucknorris.io/jokes/categories';

   const response = await fetch(URL)
  

   const data = await response.json()
    return data
}

function displayCatergories() {

}

getCatergories()
.then(displayCatergories)