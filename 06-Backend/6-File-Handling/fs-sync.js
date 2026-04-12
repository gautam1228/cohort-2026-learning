import fs from "node:fs";

// 1. Write

// fs.writeFileSync("hello.txt", "This text was added using the fs module, writeFileSync function.\n");

// 2. Read

// fs.readFileSync(<file_path>);
const fileData = fs.readFileSync("hello.txt", "utf-8");
console.log(fileData);

// 3. Append
// fs.appendFileSync("hello.txt", "This data was appended to the file !\n");

// 4. Creating a folder
// fs.mkdirSync("fsFolder", { recursive: true });

// 5. Delete
// fs.unlinkSync("hello.txt");
// fs.rmdirSync("fsFolder"); // For Empty directories
