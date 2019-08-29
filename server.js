const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const publicPath = path.join(__dirname, './public');

app.use(bodyParser.json());
app.use(express.static(publicPath));

app.get('/flag', (req,res) => {
	res.send("Access Denied");
});

app.post('/flag', (req,res) => {
	res.send("This is your flag: #LUGBatch2023");
})

app.listen(4000, () => {
	console.log("Prateek");
});