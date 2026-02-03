type Product = {
    title: string,
    price: number,
    id: number,
    tags: string[],
   
}

const getProducts =  async ():Promise <Product[]> => {

    const response =  await fetch('https://dummyjson.com/products')

    if(!response.ok) throw new Error('Something went wrong!')

    const data = await response.json()
    console.log(data)
    // how to get data with TypeScript with type
    const products: Product[] = data.products.map(
       ({title,price,id,tags}:Product) => {console.log(title,price,id,tags)
        return {title,price,id,tags}
       } 
    )
    console.log(products)
    return products
}

getProducts()