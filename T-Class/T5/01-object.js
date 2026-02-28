// Objects --> Properties --> key: value

// Two ways
let claude = {}; // Object literal
let gemini = new Object(); // Object constructor syntax

let chatGpt = {
  company: "OpenAI",
  version: 5.3,
  realeaseYear: 2025,
};

console.log(chatGpt);

chatGpt.type = "Large Language Model";

chatGpt.isMultiModal = true;

console.log(chatGpt);

// removing a property
delete chatGpt.isMultiModal;

console.log(chatGpt["version"]);
