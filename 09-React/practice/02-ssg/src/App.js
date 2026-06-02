import React from "react";
import ReactDom from "react-dom/client";
import { demoData } from "./data.js";

const App = () => {
    return React.createElement(
        "div",
        {
            style: { backgroundColor: "#232323" },
        },
        [
            React.createElement("h1", { key: "heading" }, "Data"),
            React.createElement("p", { key: "para" }, "This is the list of users"),
            React.createElement(
                "ul",
                { key: "ul" },
                demoData.map((d) =>
                    React.createElement(
                        "li",
                        { key: d.id },
                        `< Name: ${d.name}, Age: ${d.age}, Email: ${d.email} >`,
                    ),
                ),
            ),
        ]
    );
};

export default App;
