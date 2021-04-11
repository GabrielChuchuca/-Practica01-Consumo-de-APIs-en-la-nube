function consumoApi(){
    var palabra = document.getElementById("usuarioInput").value.replace(" ", "-")
    var detalles = ""
    var request = new XMLHttpRequest();
    request.open('GET', 'https://newsapi.org/v2/everything?q='+ palabra + '&apiKey=978b86c1cff2420db9e808f215d8d826', true);
    request.onload = function () {
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
        for(var i=0; i < data['articles'].length; i++){
            detalles += "<tr>" +
            "<td>" + data['articles'][i]['author'] + "</td>" +
            "<td>" + data['articles'][i]['title'] + "</td>" +
            "<td>" + data['articles'][i]['description'] + "</td>" +
            "<td><a href=" + data['articles'][i]['url'] + " target='_blank'>link</a></td>" +
            "<td><img src=" + data['articles'][i]['urlToImage'] + " width='500' height='400'></td>" +
            "<td>" + data['articles'][i]['publishedAt'] + "</td>" +
            "<td>" + data['articles'][i]['content'] + "</td>" +
            "</tr>"
        }
        document.getElementById("tablaDATOS").innerHTML = detalles
        }
    }
    request.send();
}