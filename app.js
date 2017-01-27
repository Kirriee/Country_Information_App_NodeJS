// // require the fs library
var fs = require ("fs")
// var fileReader = require ('./json-file-reader')


fs.readFile('./countries.json', 'utf-8', function (error, data){
	if (error) {
		console.log("There is an error");
		throw error	
	}
console.log("ik werk");
});



	var parsed = JSON.parse(data);
	var countryname = process.argv[2]
	// function getName (){

		// for (var i=0; i < parsed.length; i++){ 
			if (parsed[i].name === countryname) {
				console.log("Country: " + parsed[i].name);
				console.log ("Top Level Domain: " + parsed[i].topLevelDomain);
			}
		}

	// }}

	// fileReader('./countries.json', getName);




