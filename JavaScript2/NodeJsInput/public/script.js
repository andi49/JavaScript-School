// script.js

// Hämta form och output element
const form = document.getElementById("myForm");
const output = document.getElementById("output");

// Lyssna på form submission
form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop browser navigation

    // Samla form data
    const formData = new FormData(form);
    const data = {};
    formData.forEach((v, k) => data[k] = v);

    // POST till server
    const res = await fetch("/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });

    const text = await res.text();
    alert(text);

    form.reset();
    loadData(); // uppdatera JSON display
});

// Funktion för att hämta och visa data
async function loadData() {
    const res = await fetch("/data");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
}

// Optional: load data direkt när sidan laddas
window.addEventListener("DOMContentLoaded", loadData);
