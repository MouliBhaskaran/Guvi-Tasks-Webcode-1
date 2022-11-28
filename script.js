// Document Object Model (DOM)

//Creating a nav element for Welcome info
let navNothing = document.createElement("nav");
navNothing.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-color">
<div class="container-md">
  <a class="navbar-brand text-center" href="#" id="navban"> Welcome to this Webpage🥳🥳.Here, We use the Nationalize API  to predict the nationality of a person given their name  </a>
</div>
</nav>`;
document.body.append(navNothing);

// Creating a nav element for the navbar
let nav = document.createElement("nav");
nav.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-green">
<div class="container">
<a class="navbar-brand" href="#">
    <img src="https://img.icons8.com/3d-fluency/100/null/3d-fluency-globe-location.png"/>       
    </a>
  <a class="navbar-brand text-white fw-light" href="index.html" id="brandName">N A T I O N A L I Z E</a>
  <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  <div class="collapse navbar-collapse" id="navContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
      <li class="nav-item " >
      <a class="nav-link active text-white prop0   m-2 p-2  fw-bold" aria-current="page" href="https://nationalize.io/"target="_blank">API-DOCS</a>
      </li>
      <li class="nav-item" >
      <a class="nav-link active text-white prop0  m-2 p-2 fw-bold" aria-current="page" href="https://nationalize.io/use-cases"target="_blank">SCENARIOS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active text-white prop0  m-2 p-2 fw-bold " aria-current="page" href="https://tool.genderize.io/"target="_blank">DATA</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active text-white prop0  m-2 p-2 fw-bold" aria-current="page" href="assets/contact.html" target="_blank">CONTACT</a>
      </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" id="input" placeholder="Search By Name" aria-label="Search">
  
      <button class="btn btn-grad text-white fw-bold" type="button" onclick="apiCall()">Search</button>
    </form>
  </div>
</div>
</nav>`;
document.body.append(nav);

// Creating a div element for the data table
let div1 = document.createElement("div");
div1.innerHTML = `<table class="table text-center">
        <thead>
        <h1 id="tbl-name" class='text-white text-center'>Name:<mark id="point1" style="background: #000000 !important;color:#FFF;"></mark></h1>
          <tr>
            <th class="text-white col-4" scope="col">S.NO</th>
            <th class="text-white col-4" scope="col">COUNTRY-ID</th>
            <th class="text-white col-4" scope="col">PROBABILITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th class="text-white"scope="row">1</th>
            <td><span class="text-white fw-bold" id='point2'></span></td>
            <td><span class="text-white fw-bold" id='point3'></span></td>
          </tr>
          <tr>
            <th class="text-white" scope="row">2</th>
            <td><span class="text-white fw-bold" id='point4'></span></td>
            <td><span class="text-white fw-bold" id='point5'></span></td>
          </tr>
        </tbody>
      </table>`;
document.body.append(div1);

//Creating a async function with await, try and catch to effectively implement NATIONALIZE API
function apiCall() {
  async function nationalizeApi() {
    let data = document.getElementById("input").value;
    let result = await fetch(`https://api.nationalize.io?name=${data}`);

    let mainResult = await result.json();

    try {
      let a = mainResult.name;

      let b = mainResult.country[0].country_id;

      let c = mainResult.country[1].country_id;

      let d = mainResult.country[0].probability;

      let e = mainResult.country[1].probability;

      let point1 = document.getElementById("point1");
      point1.innerHTML = `${a}`;
      let point2 = document.getElementById("point2");
      point2.innerHTML = `${b}`;
      let point3 = document.getElementById("point3");
      point3.innerHTML = `${d}`;
      let point4 = document.getElementById("point4");
      point4.innerHTML = `${c}`;
      let point5 = document.getElementById("point5");
      point5.innerHTML = `${e}`;
    } catch (error) {
      alert("Enter the name properly (for example: John, richard, Alex, David");

      console.log(error);
    }
  }
  nationalizeApi();
}
