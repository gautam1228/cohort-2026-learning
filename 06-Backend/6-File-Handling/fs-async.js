import fs from "node:fs";

fs.writeFile("async.txt", "This data is being added asynchronously !", (err) => {
    if (err) {
        console.error(err);
    }
    console.log("File: async.txt written successfully !");
});

console.log("This is written after fs async");
