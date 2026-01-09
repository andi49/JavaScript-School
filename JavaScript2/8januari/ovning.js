const sumOddNumbers = numbers =>
  numbers
    .filter(n => n % 2 !== 0)
    .reduce((sum, n) => sum + n, 0);


const result = sumOddNumbers([1, 2, 3, 4, 5]);
console.log(result);



const toTitleCase = cases =>
  cases.map(word =>
    word[0].toUpperCase() + word.slice(1).toLowerCase()
  );

const resultTwo = toTitleCase(["hello", "WORLD", "javaScript"]);
console.log(resultTwo);



const mergeUnique = (...arr) => {

const merged = [].concat(...arr)
const uniqe = new Set(merged)

return uniqe
}
const resultThree = mergeUnique([1, 2, 3], [3, 4, 5], [5, 6], [6,7,8,9]); // [1, 2, 3, 4, 5, 6]
console.log(resultThree)




const countWords = words => 
  words.reduce((acc, word) => {
    if(acc[word]) {acc[word] = acc[word] + 1}
    else {acc[word] = 1}
    return acc;
  }, {}); 


const resultFour = countWords(['hund', 'katt', 'gorilla', 'katt', 'katt', 'gorilla', 'äpple', 'hund', 'katt', 'apa', 'hund']);
console.log(resultFour)
