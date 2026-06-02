import path from "node:path";
import { fileURLToPath } from "node:url";

import fs from "fs-extra";
import React from "react";
import ReactDOMServer from "react-dom/server";

import { demoData } from "../src/data.js";
import App from "../src/App.js";

// Defining the dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// Defining the output path
const outputPath = path.join(__dirname, "../dist");
const htmlTemplatePath = path.join(__dirname, "../src/template.html");
const outputHtmlPath = path.join(outputPath, "index.html");

const template = fs.readFileSync(htmlTemplatePath, "utf-8");

// Creating the new HTML with the data populated dynamically
const appHtml = ReactDOMServer.renderToStaticMarkup(
    React.createElement(App, { demoData }),
);

const finalHtml = template.replace("<!--app-->", appHtml);

// Writing this to the final html build
fs.ensureDirSync(outputPath);
fs.writeFileSync(outputHtmlPath, finalHtml, "utf-8");

console.log(`Build completed successfully. Output written to ${outputHtmlPath}`);
