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
const fs = require("fs");

const express = require(`express`);

const app = express();
app.get('/', function (req,res) {
    
    fs.readFile("./data.json", "utf8",(err,data)=>{
        if(!err){
           const convertedData = JSON.parse(data);
           convertedData.workers.forEach(element => {
            console.log(element);
           });
            res.send(convertedData);
        }
        else{
            console.error(err);
        }
    })
  });
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  })