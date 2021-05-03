var moduleContainer = document.getElementById('module-info');
var moduleBtn = document.getElementById("assessmenttBtn");

moduleBtn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteColeman/CIS2169CW2/master/json/timeslot.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();

});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Module_name + " - " +
    data[i].Assessment_info.Title + ", is assessment number  " + data[i].Assessment_info.Number +
    "covering Learning Outcomes " + data[i].Assessment_info.LO_overed + " with a volume of " + 
     data[i].Assessment_info.Volume + " and a weighting of " + data[i].Assessment_info.Weighting ; 
  }

  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
