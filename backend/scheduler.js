const { fork } = require("child_process");
const today = new Date();
console.log(today.getUTCHours());
jobdone = false;
console.log("Running the scheduler app ...");

while (true) {
  if (today.getUTCHours() == 13 && !jobdone) {
    const child = fork("datadownload.js");
    child.on("close", (code) =>
      console.log("Process finished with code:" + code)
    );
    jobdone = true;
  }
  if (today.getUTCHours() - 13 != 0) jobdone = false;
}
