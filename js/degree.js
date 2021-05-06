var moduleContainer = document.getElementById('degree-info');
var degreeBtn = document.getElementById("degreeBtn");

degreeBtn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteColeman/CIS2169CW2/master/json/degree.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();

});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Name + " is a " +
    data[i].Award + " course. It contains " + data[i].Learning_outcomes.length +
    " Learning Outcomes. The Learning Outcome's are " + data[i].Learning_outcomes;
  }

  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
