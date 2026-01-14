const baseUrl = "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main";

export const patchName = async ()=>{
    const info = {
        car: "all",
        test: 'world'
    }

    // Byt ut clara mot ditt egna namn
    const url = baseUrl + '/andi.json';
    const options = {
        method: 'PATCH',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}




export const getAll = async ()=>{
    const url = baseUrl + '.json';

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
}

// Info förväntas vara ett objekt
export const post = async (info)=>{

    // Byt ut clara mot ditt egna namn
    const url = baseUrl + '/andi.json';
    const options = {
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

export const patchExisting = async ()=>{
    const info = {
        middleName: "lol"
    }

    const url = baseUrl + '/andi/Oiw3BydpT_mp4hvRELc.json';
    const options = {
        method: 'PATCH',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}


export const patchDelete = async ()=>{
   

    const url = baseUrl + '/andi/array.json';
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}