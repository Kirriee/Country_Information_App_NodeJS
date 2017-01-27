// require fs library
var fs = require ("fs");

// make a function that reads file and parse JSON
function reader (filename, callback){
	fs.readFile(filename, 'utf-8', function (error, data){
		if (error) {
			console.log("There is an error");
			throw error;
		}	
		var parsedFile =JSON.parse(data);
		callback(parsedFile);

	})

}
// export function reader to app file
module.exports = reader;
