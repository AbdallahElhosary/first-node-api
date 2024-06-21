// fs is File Sysytem module    
const fs = require("fs")
const http = require("http")
// Blocking , Synchronous Way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const textOut = `This is what we know about avo : ${textIn}.\nCreated on ${Date.now()}`;


// fs.writeFileSync("./txt/output.txt", textOut)

// console.log("File Written!!")


// Non-Blocking , ASynchronous Way

// Reading of start file
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//     // Reading of data file
//     fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//         // Reading of Append file
//         fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//             // Written file
//             fs.writeFile("./txt/final1.txt", `${data1}\n${data2}\n${data3}\n`, "utf-8", err => {
//                 console.log(err)
//             })
//         })
//     })
// })