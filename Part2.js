// require fs library
// require module
var fs = require ("fs");
var fileReader = require ("./json-file-reader");






		// appoint element in array
		var countryname = process.argv[2];

		
		function getName (parsed){
			//loop through json file to see if it matches the countryname in the terminal
			for (var i=0; i < parsed.length; i++){
				if(parsed[i].name === countryname){
					console.log("Country: " + parsed[i].name)
					console.log("Top Level Domain: " + parsed[i].topLevelDomain)
				}


			}
		}

		fileReader('./countries.json', getName);
	




