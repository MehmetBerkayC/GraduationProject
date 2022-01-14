const { TIMEOUT } = require("dns");
let lastpage = 0;
const { exec } = require("child_process");
const https = require("https");
const fs = require("fs");
const { time } = require("console");
const MAXPAGE = 10000; //the reason of the max page number is flat number is because the number of request we can make is limited by api.
let errorpage = 0;
let page = 1;
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function downloadData(pageno) {
  let url2 = `https://api.rawg.io/api/games?key=4f97804ee5154a98b35ebe36aba1ca3f&metacritic=1%2C100&page=${pageno}&page_size=1000&platforms=18,1,7,4&stores=1,2,3,4,5`;
  let path = `./data[]/data${pageno}.json`;
  let request = https.get(url2, (response) => {
    if (response.statusCode == 200) {
      let writeStream = fs.createWriteStream(path);
      response.pipe(writeStream);
      writeStream.on("finish", () => {
        writeStream.close();
        return "process done";
      });
    }
    request.setTimeout(600000, () => {
      request.abort;
    });
  });
}
async function downloadDatas() {
  console.log("downloading datas from RAWG api...");
  for (page; page < 200; page++) {
    downloadData(page);
    await timeout(100);
  }

  return true;
}
async function combineDatas() {
  exec(
    "json-combiner -s ./data[] -o ./jsonoutput[]/combined.json",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`Pages are successfully combined. : ${stdout}`);
    }
  );
}
async function fixDatas() {
  exec("node dbfixer.js", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`dbfixer.js is running...: ${stdout}`);
  });
}
function runPython() {
  exec("python3 ./pythonProject3/datatry.py", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`datatry.py is running...: ${stdout}`);
  });
}

async function prepareDataset() {
  downloadDatas();
  await timeout(20000);
  combineDatas();
  await timeout(1000);
  fixDatas();
  await timeout(3000);
  runPython();
}

prepareDataset();
