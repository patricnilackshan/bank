const express = require("express");
const cors = require("cors");

const app = express();
const mysql = require("./mysql-connector");

// routes
const login = require("./routes/login");
const branches = require("./routes/branches");
const createManager = require("./routes/create-manager");
app.use(express.json());
app.use(cors());

app.post("/login", login);
app.get("/branches", branches);
app.get("/create-manager", createManager);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(`Server started on http://localhost:${PORT}`);
});

process.on("SIGINT", () => {
	console.log("Closing connection to mysql");
	mysql.end(console.error);
	process.exit(0);
});
