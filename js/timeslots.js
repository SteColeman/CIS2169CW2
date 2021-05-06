var moduleContainer = document.getElementById('module-info');
var timeslotBtn = document.getElementById("timeslotBtn");

timeslotBtn.addEventListener("click", function(){
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
    htmlString += "<p>" + data[i].ID_Code + " - " + data[i].Name + " is taught by " +
    data[i].Information.Academic + ", in room  " + data[i].Information.Room +
    " on a " + data[i].Information.Timeslot + "." ; 
  }

  moduleContainer.insertAdjacentHTML('beforeend', htmlString);

}
