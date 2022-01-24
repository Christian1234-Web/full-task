const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv").config();
const path = require("path");
const cors = require("cors");
const routes = require("./routes");
const PORT = process.env.PORT || 5000;
const CONNECTSTRING = 'mongodb://localhost:27017/gudu';

mongoose.connect(CONNECTSTRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
mongoose.connection.on("open", () => console.log("mongoose is connected"));
mongoose.connection.on("error", (err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

app.listen(PORT);

console.log("mongoose is running on port: "+ PORT)
