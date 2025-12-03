export {textWork}

function textWork() {
  const fakeH1 = document.createElement("h1");
  const fakeH2 = document.createElement("h2");
  const fakeP = document.createElement("p");

  fakeH1.innerText = "Hello";
  fakeH2.innerText = "World";
  fakeP.innerText = "!";

  document.body.appendChild(fakeH1);
  document.body.appendChild(fakeH2);
  document.body.appendChild(fakeP);
}
