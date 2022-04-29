let statesJson = null;

function handleResponse(response) {
  statesJson = response;

  let statesDropDown = document.querySelector("#states");

  console.log(statesJson);

  let option = document.createElement("option");
  option.text = "-- Select State--";
  option.value = "select";
  statesDropDown.append(option);

  for (let elem in statesJson.states) {
    let option = document.createElement("option");
    option.text = statesJson.states[elem].state;
    option.value = statesJson.states[elem].state;
    statesDropDown.append(option);
  }
}
fetch(
  "https://raw.githubusercontent.com/deepasaha01/Git-project/main/states.json"
)
  .then((response) => response.json())
  .then(handleResponse);

////////////////////////////////////////////////////////////////////
function handleChange(event) {
  selectedState = event.target.value;

  let districtDropDown = document.querySelector("#districts");
  districtDropDown.options.length = 0;

  for (let elem in statesJson.states) {
    if (statesJson.states[elem].state === selectedState) {
      for (let district of statesJson.states[elem].districts) {
        let option = document.createElement("option");
        option.text = district;
        option.value = district;
        districtDropDown.append(option);
      }
    }
  }
}
let selectedState = document.querySelector("#states");
selectedState.addEventListener("change", handleChange);
