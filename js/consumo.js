function consumoApi(){
    var palabra = document.getElementById("usuarioInput").value.replace(" ", "-")
    var detalles = ""
    var request = new XMLHttpRequest();
    request.open('GET', 'https://newsapi.org/v2/everything?q='+ palabra + '&apiKey=978b86c1cff2420db9e808f215d8d826', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {

	}
    request.send();
}