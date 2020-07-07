// Create a request variable and assign a new XMLHttpRequest object to it

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint

request.open('GET', 'https://api.tfl.gov.uk/line/mode/tube/status', true)

// Place the returned live API data to the table

request.onload = function() {
  
  var data = JSON.parse(this.response)
     
    data.forEach(lineName => {
      
  if(lineName.id == "bakerloo"){
      var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
      document.getElementById("bakerlooStatus").textContent = statusInfo;
  }
  else if(lineName.id == "central"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("centralStatus").textContent = statusInfo; 
  } 
  else if(lineName.id == "circle"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("circleStatus").textContent= statusInfo;
  }
  else if(lineName.id == "district"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("districtStatus").textContent= statusInfo;
  }
  else if(lineName.id == "hammersmith-city"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("Hammersmith&CityStatus").textContent= statusInfo;
  }
  else if(lineName.id == "jubilee"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("jubileeStatus").textContent= statusInfo;
  }
  else if(lineName.id == "metropolitan"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("metropolitanStatus").textContent= statusInfo;
  }
  else if(lineName.id == "northern"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("northernStatus").textContent= statusInfo;
  }
  else if(lineName.id == "piccadilly"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("piccadillyStatus").textContent= statusInfo;
  }
  else if(lineName.id == "victoria"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("victoriaStatus").textContent= statusInfo;
  }
  else if(lineName.id == "waterloo-city"){
    var statusInfo = lineName.lineStatuses[0].statusSeverityDescription
    document.getElementById("waterloocityStatus").textContent= statusInfo;
  }
})
}
// Send request
request.send()


