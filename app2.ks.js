var fs = require ("fs")

fs.readFile('./countries.', 'utf-8', function (error, data){
if (error){
	console.log("there is an error");
throw error}

console.log("ik werk")

	)}