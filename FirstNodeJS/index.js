// const fs = require("fs");
// fs.readFile("./data.json", "utf8", (err, data) => {
//   if (!err) {
//     const dataParse = JSON.parse(data);
//     let total = 0;

//     console.log(typeof dataParse)
//     for (const [key, value] of Object.entries(dataParse)) {
//       console.log(value.age);
//       total += value.age;
//     }
//     let average = `ortalama: ${total / dataParse.length}`;
//     fs.writeFile("result.txt", average, (err) => {
//       if (err) console.log(err);
//     });
//   } else {
//     console.error(err);
//   }
// });

