const express = require('express');
const fs = require('fs');
const exec = require('child_process').exec;
const app = express();

//app.user(express.bodyPareser());
app.listen(3000, "localhost", ()=> {
	console.log("Server Start on port 3000!");
});

app.get('/upload', (req,res) => {
	fs.readFile(req.files.uploadFile.path), (error,data) => {
		filePath = __dirname + "\\files\\" + req.filesuploadFile.name;
		fs.writeFile(filePath, data, (error) => {
			if(error) {
				throw err;
			} else {
				res.redirect("back");
			}
		})
	}
})

app.get('/system/power/shutdown', (req, res) => {
	child = exec("shutdown -h now", (error, stdout, stderr) => {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if(error !== null) {
			console.log('exec error: ' + error);
		}
	})
});

app.get('/system/power/restart', (req, res) => {
	child = exec("shutdown -r now", (error, stdout, stderr) => {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if(error !== null) {
			console.log('exec error: ' + error);
		}
	})
});

app.get('/system/power/shutdown/:id', (req, res) => {
	child = exec("shutdown -h now", (error, stdout, stderr) => {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if(error !== null) {
			console.log('exec error: ' + error);
		}
	})
});