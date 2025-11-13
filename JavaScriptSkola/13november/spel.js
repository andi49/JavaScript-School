let boxNum = []

for (let i = 0; i < 100; i++) {
   boxNum.push(i)
}
const liList = document.querySelector('numberList')

for (let i = 0; i < boxNum.length; i++) {
  const li = document.createElement('li')
  li.textContent = boxNum[i]
  document.body.appendChild(li)
}