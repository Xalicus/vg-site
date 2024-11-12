window.onload = function() {

    fetch('bibliography.json')
 
    .then(function(response) {
		return response.json();
    })
   
    .then(function(json) {
 
		var tableCode = '<table><caption>Bibliography</caption><thead><tr><th>Logo</th><th>Title</th><th>Author</th><th>Year</th><th>Publisher</th><th>Website</th></tr></thead><tbody>';
 
		for (var i = 0; i < json.length; i++) {
			tableCode += '<tr><td>' + json[i].photo + '</td><td>' + json[i].title + '</td><td>' + json[i].author + '</td><td>' + json[i].year + '</td><td>' + json[i].publisher + '</td><td>' + json[i].link + '</td></tr>';
		}
 
		tableCode += '</tbody><tfoot><tr><td colspan="6">Source: Some Books API</td></tr></tfoot></table>';
 
		document.getElementById('bibliography').innerHTML = tableCode;
	})
}
