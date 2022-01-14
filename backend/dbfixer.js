const fs = require("fs");
const myArgs = process.argv.slice(2); //argv[2] which refer to file name that needs to be read
const datadb = require(`./jsonoutput[]/combined.json`); //the json file exported from mongodb
//genre:id
//action:4,adventure:3,RPG:5,shooter:2,puzzle:7,racing:1,strategy:10
let count = 0;
let onedjson = []; //our empty list
const { Parser } = require("json2csv"); //Parser for convert json to csv
const genreIds = [1, 2, 3, 4, 5];
console.log("Tuning the dataset for desired properties");
for (let i = 0; i < datadb.length; i++) {
  for (let j = 0; j < datadb[i].results.length; j++) {
    if (
      datadb[i].results[j].rating > 0.0 &&
      datadb[i].results[j].ratings_count > 0 &&
      datadb[i].results[j].reviews_count > 0 &&
      datadb[i].results[j].released !== undefined &&
      datadb[i].results[j].genres[0] !== undefined
    ) {
      let newjson = {
        name: datadb[i].results[j].name,
        rating: rollTo1FDecNum(datadb[i].results[j].rating),
        rating_top: datadb[i].results[j].rating_top,
        ratings_count: datadb[i].results[j].ratings_count,
        reviews_count: datadb[i].results[j].reviews_count,
        suggestions_count: datadb[i].results[j].suggestions_count,
        days: dayDifFinder(datadb[i].results[j].released),
        metacritic: datadb[i].results[j].metacritic,
        added: datadb[i].results[j].added,
        genre: datadb[i].results[j].genres[0].name,
        genres: genderGenerator(datadb[i].results[j].genres),
      };
      onedjson.push(newjson);
    }
  }
}

function genderGenerator(genres) {
  let binarr = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < genres.length; i++) {
    if (genres[i].id < 6) {
      binarr[genres[i].id - 1] = 1;
    }
    if (genres[i].id == 7) {
      binarr[5] = 1;
    }
    if (genres[i].id == 10) {
      binarr[6] = 1;
    }
  }

  return binarr.toString();
}

function dayDifFinder(date) {
  const gamedate = new Date(date);
  const today = new Date("2022-01-01");
  const timeDif = today.getTime() - gamedate.getTime();
  const daydif = timeDif / (1000 * 3600 * 24);
  return daydif;
}
function rollTo1FDecNum(i) {
  //converts 3.76 to 3.8, 1.42 to 1.4  0.88 to 0.9, 0.87 to 0.9

  let a = 0.0;
  let b = i;
  a = (i * 100) % 10;
  b = Math.floor((i * 100 + a) / 10) / 10;
  return `${b.toFixed(1)}`;
}
let data = JSON.stringify(onedjson);
const someData = JSON.parse(data);
fs.writeFileSync("./fixeddata/egedatafixed.json", data);

const fields = Object.keys(someData[0]);

const csv = new Parser({ fields });
fs.writeFile(
  "./pythonProject3/fixeddata/data.csv",
  csv.parse(someData),
  function (err) {
    if (err) {
      console.error(err);
      throw err;
    }
    console.log("file saved as csv!");
  }
);
