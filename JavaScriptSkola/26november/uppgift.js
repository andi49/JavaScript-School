const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const breed = document.querySelector("#breedInput").value.trim().toLowerCase();
   console.log(breed);

  form.reset();

  const url = `https://dog.ceo/api/breed/${breed}/images/random/3`;

  console.log(url)
  fetch(url)
    .then(res => res.json())
  .then(displayDogImage);
}

function displayDogImage(dogObj) {

   for(const imgURL of dogObj.message){
        console.log(imgURL);
        const img = document.querySelector("#showDogs");
       
        img.src = imgURL;
        img.style.width = '100px'
    }
  

}
