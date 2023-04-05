const fs = require("fs");
const os = require("os");
var user = os.userInfo();
// fs.appendFile('powitanie.txt', "Hello JS"); // deprecated max v.10
fs.appendFile("powitanie.txt", "Hello World from JS!", function (err) {
  if (err) {
    console.log("Problem z dostępem do pliku");
  }
});

fs.appendFileSync("powitanie2.txt", `Hello 2  ${user.username} !\n`);
console.log("Startowa aplikacja");
console.log(user);
console.log(user["shell"]);
