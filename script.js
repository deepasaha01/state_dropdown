let statesJson = null;

function handleResponse(response) {
  statesJson = response;
}
axios
  .get(
    "https://raw.githubusercontent.com/deepasaha01/Git-project/main/states.json"
  )
  .then(handleResponse);

////////////////////////////////////////////////////////////////////
window.onload = function () {
  console.log(statesJson);
  let statesDropDown = document.querySelector("#states");

  //   console.log(statesJson.data.states[0].state);

  let option = document.createElement("option");
  option.text = "-- Select State--";
  option.value = "select";
  statesDropDown.append(option);

  for (let elem in statesJson.data.states) {
    let option = document.createElement("option");
    option.text = statesJson.data.states[elem].state;
    option.value = statesJson.data.states[elem].state;
    statesDropDown.append(option);
  }
};
////////////////////////////////////////////////////////////////////
function handleChange(event) {
  selectedState = event.target.value;

  let districtDropDown = document.querySelector("#districts");
  districtDropDown.options.length = 0;

  for (let elem in statesJson.data.states) {
    if (statesJson.data.states[elem].state === selectedState) {
      for (let district of statesJson.data.states[elem].districts) {
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
