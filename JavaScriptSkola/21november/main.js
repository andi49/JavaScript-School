const jsonString = `{"name":"John", "age":30, "car":null}`;

console.log(jsonString, typeof jsonString);
console.log(jsonString.name);

const obj = JSON.parse(jsonString);

console.log(obj, typeof obj);
console.log(obj.age);

function createImages(dogURLArray) {
  for (const imgURL of dogURLArray) {
    console.log(imgURL);
    const img = document.createElement("img");
    document.body.appendChild(img);

    img.src = imgURL;
  }
}

/// how to fetch from a api

// // Förfrågan skickades till https://dog.ceo/api/breeds/image/random/5
// const dogJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg","https:\/\/images.dog.ceo\/breeds\/mountain-bernese\/n02107683_3568.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_85.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-tibetan\/n02108551_4807.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_9076.jpg"],"status":"success"}`;

// const dogObj = JSON.parse(dogJson);
// console.log(dogObj.message);
// createImages(dogObj.message);

// // hämta två random bilder av en labrador
// const labradorJson = `{"message":["https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_3773.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_7418.jpg"],"status":"success"}`

// const labradorObj = JSON.parse(labradorJson);
// createImages(labradorObj.message);

// function createImages(dogURLArray){
//     for(const imgURL of dogURLArray){
//         console.log(imgURL);
//         const img = document.createElement('img');
//         document.body.appendChild(img);
//         img.src = imgURL;
//     }
// }

///Secnond API CALL

// const breweriJSON = `[{"id":"f1855903-dd7f-428d-86bd-14fa054e4771","name":"Bryggerifabriken i Karlskrona AB","brewery_type":"micro","address_1":"Alamedan 10","address_2":"c/o Karlskrona Hotel o Fastigheter AB","address_3":null,"city":"Karlskrona","state_province":"Blekinge","postal_code":"371 31","country":"Sweden","longitude":15.59114,"latitude":56.15906,"phone":null,"website_url":"http://bryggerifabriken.se/","state":"Blekinge","street":"Alamedan 10"},{"id":"fdbb4b87-70d0-4362-834f-502fd5b05feb","name":"Brygghus19","brewery_type":"micro","address_1":"Västra Kajen 8F","address_2":null,"address_3":null,"city":"Karlshamn","state_province":"Blekinge","postal_code":"374 31","country":"Sweden","longitude":14.86054,"latitude":56.16757,"phone":"+46709191950","website_url":"http://www.brygghus19.se/","state":"Blekinge","street":"Västra Kajen 8F"}]`;
// const brewOBJ = JSON.parse(breweriJSON);
// // console.log(brewOBJ[0].name);
// showBrewName(brewOBJ);

// function showBrewName(arr) {
//   for (const brewery of arr) {
//     console.log(brewery.name);

//     const h1 = document.createElement("h1");
//     document.body.appendChild(h1);
//     h1.innerText = brewery.name;
//   }
// }

const sanBrewJson = `[
  {
    "id": "ef970757-fe42-416f-931d-722451f1f59c",
    "name": "10 Barrel Brewing Co",
    "brewery_type": "large",
    "address_1": "1501 E St",
    "address_2": null,
    "address_3": null,
    "city": "San Diego",
    "state_province": "California",
    "postal_code": "92101-6618",
    "country": "United States",
    "longitude": -117.129593,
    "latitude": 32.714813,
    "phone": "6195782311",
    "website_url": "http://10barrel.com",
    "state": "California",
    "street": "1501 E St"
  },
  {
    "id": "5fdcc498-f9df-4fa5-b35d-487a59f0fecc",
    "name": "2Kids Brewing Company",
    "brewery_type": "micro",
    "address_1": "8680 Miralani Dr Ste 123",
    "address_2": null,
    "address_3": null,
    "city": "San Diego",
    "state_province": "California",
    "postal_code": "92126-6391",
    "country": "United States",
    "longitude": -117.137429,
    "latitude": 32.896584,
    "phone": "8584805437",
    "website_url": "http://www.2kidsBrewing.com",
    "state": "California",
    "street": "8680 Miralani Dr Ste 123"
  },
  {
    "id": "3b0b5b9b-f6d8-49e3-8ebd-0bcef6939bcd",
    "name": "32 North Brewing Co",
    "brewery_type": "brewpub",
    "address_1": "8655 Production Ave Ste A",
    "address_2": null,
    "address_3": null,
    "city": "San Diego",
    "state_province": "California",
    "postal_code": "92121-2258",
    "country": "United States",
    "longitude": -117.1649842,
    "latitude": 32.88313237,
    "phone": "(619) 363-2622",
    "website_url": "https://42northbrewing.com",
    "state": "California",
    "street": "8655 Production Ave Ste A"
  }
]
`;

const sandOBJ = JSON.parse(sanBrewJson);
// console.log(brewOBJ[0].name);
showSandBrew(sandOBJ);

function showSandBrew(arr) {
  for (const brewery of arr) {
    console.log(brewery.name);

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = brewery.name;

    const fakeA = document.createElement("a");
    document.body.appendChild(fakeA);
    fakeA.innerText = `Vissit us at`
    fakeA.href = brewery.website_url;
  }
}