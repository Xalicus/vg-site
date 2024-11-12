window.onload = function() {
	
	fetch('warframes.json')
	
	.then(function(response) {
		return response.json();
	})
	
	.then(function(json) {
		
		var tableCode = '<table><caption>Warframes and their abilities</caption><thead><tr><th></th><th>Warframe</th><th>Ability 1</th><th>Ability 2</th><th>Ability 3</th><th>Ability 4</th></tr></thead><tbody>';
		
		for (var i = 0; i < json.length; i++) {
			tableCode += '<tr><td>' + json[i].photo + '</td><td>' + json[i].wfname + '</td><td>' + json[i].ability1 + '</td><td>' + json[i].ability2 + '</td><td>' + json[i].ability3 + '</td><td>' + json[i].ability4 + '</td></tr>';
		}
		
		tableCode += '</tbody><tfoot><tr><td colspan="6">Source: https://www.warframe.com/game/warframes</td></tr></tfoot></table>';
		
		document.getElementById('tableWF').innerHTML = tableCode;
	});
};