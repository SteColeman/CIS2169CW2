var moduleContainer = document.getElementById('module-info');
var moduleBtn = document.getElementById("moduleBtn");

moduleBtn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteColeman/CIS2169CW2/master/json/module.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();

});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Name + " is worth a total of " +
    data[i].Information.Credits + " credits. It contains " + data[i].Information.Learning_outcomes.length +
    " Learning Outcomes and has " + data[i].Information.Assessments.length + " assessments. The Learning Outcome's are " +  
    data[i].Information.Learning_outcomes + ". The module leader is " + data[i].Information.Academic_lead;
  }

  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
