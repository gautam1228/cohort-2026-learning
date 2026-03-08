const express = require("express");

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.json());

app.get("/menu", (req, res) => {
    res.json({
        items: ["Thali", "Biryani", "Alfredo Pasta"],
    });
});

app.post("/order", (req, res) => {
    let order = req.body;
    res.status(200).json({
        status: "received",
        order: req.body,
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
