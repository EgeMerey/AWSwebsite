// Create a request variable and assign a new XMLHttpRequest object to it

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://api.tfl.gov.uk/line/mode/tube/status', true)

// Place the returned live API data to the table

request.onload = function() {
  
  var data = JSON.parse(this.response)
     
    data.forEach(asd => {
      
  if(asd.id == "bakerloo"){
      var a = asd.lineStatuses[0].statusSeverityDescription
      document.getElementById("bakerlooStatus").textContent = a;
  }
  else if(asd.id == "central"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("centralStatus").textContent = a    
  } 
  else if(asd.id == "circle"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("circleStatus").textContent= a;
  }
  else if(asd.id == "district"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("districtStatus").textContent= a;
  }
  else if(asd.id == "hammersmith-city"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("Hammersmith&CityStatus").textContent= a;
  }
  else if(asd.id == "jubilee"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("jubileeStatus").textContent= a;
  }
  else if(asd.id == "metropolitan"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("metropolitanStatus").textContent= a;
  }
  else if(asd.id == "northern"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("northernStatus").textContent= a;
  }
  else if(asd.id == "piccadilly"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("piccadillyStatus").textContent= a;
  }
  else if(asd.id == "victoria"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("victoriaStatus").textContent= a;
  }
  else if(asd.id == "waterloo-city"){
    var a = asd.lineStatuses[0].statusSeverityDescription
    document.getElementById("waterloocityStatus").textContent= a;
  }
})
}
// Send request
request.send()


