export{getArgu}

async function getArgu(breeds) {
    const url = await fetch(`https://dog.ceo/api/breed/${breeds}/images/random`)

    const data = await url.json()

    return data.message
}