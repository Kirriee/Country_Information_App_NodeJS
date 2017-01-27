var fs = require ("fs");

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
module.exports = reader;
