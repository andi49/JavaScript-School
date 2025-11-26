/// DOG API START

const randomDogJS = `{"message":["https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_120.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_13855.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_14056.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_1614.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_2941.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_3406.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_4677.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_5159.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_699.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_712.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_7888.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_8749.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_9086.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_9334.jpg","https:\/\/images.dog.ceo\/breeds\/husky\/n02110185_9429.jpg"],"status":"success"}`

const randomOBJ = JSON.parse(randomDogJS)
createImages(randomOBJ.message);

function createImages(dogURLArray){
    for(const imgURL of dogURLArray){
        console.log(imgURL);
        const img = document.createElement('img');
        document.body.appendChild(img);
        img.src = imgURL;
        img.style.width = '100px'
    }
}


/// DOG API END


/// CHUCKNORIS API START 

    const randomJoke = `{"categories":[],"created_at":"2020-01-05 13:42:24.142371","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"WvF15mz8TpuBr4VLKNCihQ","updated_at":"2020-01-05 13:42:24.142371","url":"https://api.chucknorris.io/jokes/WvF15mz8TpuBr4VLKNCihQ","value":"Chuck Norris...the Man, the Legend, but never the Myth."}`
    const randomFoodJoke = `{"categories":["food"],"created_at":"2020-01-05 13:42:18.823766","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"e9LPe1QcTIWO8VqQJZmhhg","updated_at":"2020-01-05 13:42:18.823766","url":"https://api.chucknorris.io/jokes/e9LPe1QcTIWO8VqQJZmhhg","value":"Chuck Norris' favorite seafood restaurant always serves him armadillo on the half shell."}`
    const randomSportJoke = `{"categories":["sport"],"created_at":"2020-01-05 13:42:19.576875","icon_url":"https://api.chucknorris.io/img/avatar/chuck-norris.png","id":"qbfnqa0pstsl00i2he3g7w","updated_at":"2020-01-05 13:42:19.576875","url":"https://api.chucknorris.io/jokes/qbfnqa0pstsl00i2he3g7w","value":"Chuck Norris once went skydiving, but promised never to do it again. One Grand Canyon is enough."}`



    const randomJokeOBJ = JSON.parse(randomJoke)
    const randomFoodJokeOBJ = JSON.parse(randomFoodJoke)
    const randomSportJokeOBJ = JSON.parse(randomSportJoke)

    createText(randomJokeOBJ.value)

    createText(randomFoodJokeOBJ.value)

    createText(randomSportJokeOBJ.value)

    function createText(textarray) {
            const h1 = document.createElement('h1');
            document.body.appendChild(h1);
            h1.innerText = textarray;

    }


/// CHUCKNORIS API END