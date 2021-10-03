getweatherreport= function(city) {
    
    fetch("api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=ca81024eb5c71bfc3e095c70629c034f")
    .then(function (response) {
        
        if (response.ok) {
            
            response.json().then(function (data) {
               
                displayData(data);
                console.log(data);
            })
        }
        else {
            document.location.replace("./index.html");
        }
    })
}