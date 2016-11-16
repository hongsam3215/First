var express = require('express');

var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var execNode = require('child_process');

var json;


app.get('/get', function (req, res) {
	
	
	child = execNode.spawn('node', ['-v']);
	child.stdout.setEncoding('utf8');
	child.stdout.on('data', function(data) {
	
	json = JSON.stringify({ 
		"Auth": "Test", 
		"version": data, 
	});
	console.log(json);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	//res.sendStatus(403);
	res.send(json);;
	});  
});

app.get('/getName', function (req, res) {
	

	execNode.exec('whoami', function(err, stdout, stderr) {
	
	json = JSON.stringify({ 
			"myName": stdout, 
	});
	console.log(json);
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.send(json);;
	});
});

app.post('/create', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	console.log(req.query.id);
	res.sendStatus(200);

});
app.post('/create2', function (req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	var obj = {};
	console.log('body: ' + JSON.stringify(req.body));
	res.status(200);
	//res.status(403);
	
	res.send(req.body);
});



app.listen(3000, function () {
  //console.log('Example app listening on port 3000!');
});