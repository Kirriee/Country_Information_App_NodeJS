// require the fs library
var fs = require ("fs");

//call fs.ReadFile
fs.readFile('./countries.json', 'utf-8', function (error, data){
	
// check for possible errors
if (error){
	console.log("there is an error");
	throw error;
}

// parse JSON file
var parsed = JSON.parse(data);
// apoint element in array
var countryname = process.argv[2];

// check if name in parsed file is equal to name in array
for (var i=0; i < parsed.length; i++){
	if(parsed[i].name === countryname){
		console.log("Country: " + parsed[i].name)
		console.log("Top Level Domain: " + parsed[i].topLevelDomain)
	}


}


});





