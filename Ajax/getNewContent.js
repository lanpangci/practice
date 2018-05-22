function getNewContent () {
    var request = getHTTPObject();
    if(request) {
        request.open("GET", "example.txt", true);
        request.onreadystatechange = function () {
            if(request.readyState == 4) {
                var para = document.createElement("p");
                var text = document.createTextNode(request.responseText);
                para.appendChild(text);
                document.getElementById("new").appendChild(para);
            }
        };
        request.send(null);
    }else {
        alert("Sorry, your browser doesn\'t support XMHttpRequest");
    }
}