type starWars = {
    uid: string,
    name: string,
    url: string
}

const getProducts =  async ():Promise <starWars[]> => {

    const response = await fetch('https://www.swapi.tech/api/people')

    if(!response.ok) throw new Error('Something went wrong!')

    const data = await response.json()
    console.log(data)

    const product: starWars[] = data.results.map(
    ({ uid, name, url }: any) => {
      console.log(uid, name, url)
      return { uid, name, url }
    }
    )
    console.log(product)
    return product

}

getProducts()