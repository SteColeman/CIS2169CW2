var moduleContainer = document.getElementById('degree-info');
var degreeBtn = document.getElementById("degreeBtn");

degreeBtn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://raw.githubusercontent.com/SteColeman/CIS2169CW2/master/module.json');
  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
  };
  ourRequest.send();

});

function renderHTML(data){
  var htmlString = "";

  for(i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Name + " is a"
    + data[i].Award + " course. It contains " + data[i].Learning_outcomes.length
     + " Learning Outcomes";

    htmlString += " The Learning Outcome's are ";
    for(ii = 0; ii < data[i].Information.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Information.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Information.Learning_outcomes[ii];
      }
    }
    }


  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
