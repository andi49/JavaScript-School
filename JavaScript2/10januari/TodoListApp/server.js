/// URL SOM VI TAR IFRÅN
const baseUrl = "https://webb23-1babd-default-rtdb.europe-west1.firebasedatabase.app/todo-list.json";

///<!-------------------------------------------------------------------------------------------------------------------->
// Här hämtar vi alla data i databasen
export const getData = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  // console.log(data)
  return data;
};
///<!-------------------------------------------------------------------------------------------------------------------->
/// Här ska vi POST data till databasen med hjälp forum + button
export const postData = async (value) => {
    const info = {
        task: value, 
        done: false
    };

    const options = {
        method: "POST",
        body: JSON.stringify(info),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

    const url = baseUrl; 
    const response = await fetch(url, options);
    const data = await response.json();
    console.log("Ny task sparad:", data); 
};
///<!-------------------------------------------------------------------------------------------------------------------->
export const patchData = async (key, currentDone) => {
  const info = {
    done: !currentDone
  };

  // ta bort .json och lägg till /id.json
  const url = baseUrl.replace(".json", `/${key}.json`);

    const options = {
        method: "PATCH",
        body: JSON.stringify(info),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    };

   const response = await fetch(url, options);
  const data = await response.json();
  return data
};
///<!-------------------------------------------------------------------------------------------------------------------->
export const deleteData = async (key) => {
    const url = baseUrl.replace(".json", `/${key}.json`);

    const response = await fetch(url, { method: "DELETE" });

    if (!response.ok) {
        throw new Error("Delete failed");
    }

    console.log("Task deleted:", key);
}; 
///<!--------------------------------------------------------------------------------------------------------------------> 