const fs = require("fs");
const http = require("http");

/*
const hello = "Hello world!";

console.log(hello);

const textInput = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textInput);

const textOutput = "lorem! lorem!! lorem!!!";
fs.writeFileSync("./txt/output.txt", textOutput);
*/
/*
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  if (err) throw new Error(er);
  fs.readFile(`./txt/${data}.txt`, "utf-8", (err, data1) => {
    if (err) throw new Error(er);
    console.log(data1);
    fs.readFile("./txt/append.txt", "utf-8", (err, data2) => {
      if (err) throw new Error(er);
      console.log(data2);
      fs.writeFile("./txt/final.txt", `${data1}\n${data2}`, "utf-8", (err) => {
        if (err) throw new Error(err);
      });
    });
  });
});
*/

const server = http.createServer((req, res) => {
  console.log(req);
  res.end("Hello from the server");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to request on port 3000");
});
