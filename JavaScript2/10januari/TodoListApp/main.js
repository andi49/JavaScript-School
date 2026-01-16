import { getData, postData, patchData, deleteData } from "./server.js";

///<!-------------------------------------------------------------------------------------------------------------------->
/// Här display vi allt
const displayData = document.querySelector("#showData");

const showData = async () => {
  const data = await getData();

  displayData.style.listStyle = "none";
  displayData.innerHTML = ''

  for (let key in data) {
    const todo = data[key];

    const li = document.createElement("li");
    li.textContent = `${key}: ${todo.task} = ${todo.done}`;

    if (todo.done) {
      li.style.textDecoration = "line-through";
    }

     const btn = document.createElement("button");
        btn.textContent = "Delete";

        btn.addEventListener("click", () => {
            deleteData(key); // ✅ skickar korrekt key
            li.remove(); // tar bort li direkt från listan
        });

    li.appendChild(btn);
    displayData.appendChild(li);
  }
};
///<!-------------------------------------------------------------------------------------------------------------------->
const listenData = document.querySelector("#listenData"); /// FORUM
const userValue = document.querySelector("#userValue"); /// INPUT

listenData.addEventListener("submit", async (e) => {
  e.preventDefault();
  const value = userValue.value.trim();
  await postData(value);
  userValue.value = "";
  await showData();
});
///<!-------------------------------------------------------------------------------------------------------------------->
displayData.addEventListener("click", async (e) => {
  if (e.target.tagName !== "LI") return;

  const id = e.target.dataset.id;
  const done = e.target.dataset.done === "true";

  // PATCH till API
  const updatedTask = await patchData(id, done);

  // Uppdatera DOM
  e.target.dataset.done = updatedTask.done;

  if (updatedTask.done) {
    e.target.style.textDecoration = "line-through";
  } else {
    e.target.style.textDecoration = "none";
  }
});
///<!-------------------------------------------------------------------------------------------------------------------->

        
showData();
