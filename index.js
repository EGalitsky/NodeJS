const fs = require("fs");
const http = require("http");
const url = require("url");

const replaceTemplate = require("./modules/replaceTemplate");

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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const productData = JSON.parse(data);

const tempOverview = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);

  //Overview page
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardHtml = productData
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS}", cardHtml);
    res.end(output);
  }
  //Product page
  else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = productData[query.id];
    const output = replaceTemplate(tempProduct, product);
    res.end(output);
  }
  // Api page
  else if (pathname === "/api") {
    fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) =>
      res.end(data)
    );

    //Error
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h2>Page not found</h2>");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Listening to request on port 3000");
});
