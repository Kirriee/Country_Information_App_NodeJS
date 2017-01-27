var fs = require ("fs");

fs.readFile('./countries.json', 'utf-8', function (error, data){
	if (error){
		console.log("there is an error");
		throw error;
	}

		// console.log("ik werk");
		var parsed = JSON.parse(data);
		var countryname = process.argv[2];


		for (var i=0; i < parsed.length; i++){
			if(parsed[i].name === countryname){
				console.log("Country: " + parsed[i].name)
				console.log("Top Level Domain: " + parsed[i].topLevelDomain)
			}


		}


	});





