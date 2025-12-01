async function getCatergories() {
  const URL = "https://api.chucknorris.io/jokes/categories";

  try {
    const response = await fetch(URL);
    console.log(response)
    if(!response.ok) {
        throw 'Something went wrong'
    } 
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}

function displayCatergories(arr) {
  const select = document.querySelector("#category");

  for (const category of arr) {
    const option = document.createElement("option");
    option.innerText = category;
    console.log(category);

    option.innerText = category;
    option.value = category;
    select.append(option);
  }
}

function displayError () {
    const h1Error = document.querySelector('#error')
    h1Error.innerText = error
}

getCatergories()
.then(displayCatergories)
.catch(displayError)
