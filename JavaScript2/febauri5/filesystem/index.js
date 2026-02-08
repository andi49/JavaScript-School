import fs from "node:fs";
const filePath = "./filesystem/customer.json";

const newObject = {
  name: "panda",
  ordder_count: 25,
  address: "ValderGatan45",
};

fs.readFile(filePath, "utf-8", (err, jsonString) => {
  if (err) {
    console.log("Fel vid läsning av filen:", err);
    return;
  }

  try {
    console.log("Läsning lyckades");

    let data;
    const parsed = JSON.parse(jsonString);
    // Om parsed inte är en array, gör det till en array
    if (Array.isArray(parsed)) {
      // Om parsed redan är en array
      data = parsed;
    } else {
      // Om parsed är ett objekt, gör det till en array med ett element
      data = [parsed];
    }

    // Lägg till nytt objekt
    data.push(newObject);

    // Skriv tillbaka hela arrayen korrekt
    fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8", (err) => {
      if (err) {
        console.log("Fel vid skrivning till filen:", err);
      } else {
        console.log("Ny kund tillagd korrekt! 🎉");
      }
    });
  } catch (err) {
    console.log("Fel vid uppdatering av JSON:", err);
  }
});

// const jsonString = JSON.stringify(newObject)
// console.log(jsonString)

// fs.writeFile(filePath, JSON.stringify(newObject, null, 2), err => {
//     if(err) {console.log(err)
//     } else {
// console.log('Det funkade')
// }
// })

// function jsonReader(filePath, callback) {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) return callback(err);
//     try {
//       const parsed = JSON.parse(data);
//       callback(null, parsed);
//     } catch (err) {
//       callback(err);
//     }
//   });
// }

// jsonReader('./filesystem/customer.json', (err, data) => {
//     if(err){
//         console.log(err)
//     } else {
//         data.ordder_count += 1
//         fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
//             if(err){
//                 console.log(err)
//             }
//         })
//     }
// })

// // parse json data
// // fs.readFile('./filesystem/customer.json', 'utf-8', (err, jsonString) => {
// //     if(err) {
// //         console.log(err)
// //     } else {
// //        try {
// //          const data = JSON.parse(jsonString)
// //          console.log(data.address)
// //          let kunder = JSON.parse(data)
// //        } catch(err){
// //             console.log('Error passing JSON', err)
// //        }
// //     }
// // })
