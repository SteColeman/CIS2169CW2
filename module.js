var moduleContainer = document.getElementById('module-info');
var moduleBtn = document.getElementById("moduleBtn");

moduleBtn.addEventListener("click", function(){
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
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Name + " is worth a total of "
    + data[i].Information.Credits + " credits. It contains " + data[i].Information.Learning_outcomes.length
     + " Learning Outcomes and has " + data[i].Information.Learning_outcomes.length + " assessments " ; //".</p>";

    htmlString += " The Learning Outcome's are ";
    for(ii = 0; ii < data[i].Information.Learning_outcomes.length; ii++){
      if (ii == 0){
        htmlString += data[i].Information.Learning_outcomes[ii];
      } else {
        htmlString += " and " + data[i].Information.Learning_outcomes[ii];
      }
    }

    htmlString += ' and Volume ';
    for(ii = 0; ii < data[i].Information.Assessments.length; ii++){
      if (ii == 0){
        htmlString += data[i].Information.Assessments[ii];
      } else {
        htmlString += " and " + data[i].Information.Assessments[ii];
      }
    }

    for(i = 0; i < data.length; i++){
    htmlString += " The module leader is " + data[i].Academic_lead;
    }
  }

  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
