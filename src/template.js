
//functions to write html for each of 3 roles

const makeManager = function (data) {
  return `
<div class="card col-6 border-danger bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
<div class="card-header mb-3 text-light" style="background-color: rgb(247, 65, 65);">
    <h4>${data.name}</h4>
    <h5>Manager</h5>
  </div>
  <div class="card-body">
<ul class="list-group list-group-flush">
  <li class="list-group-item p-2">ID: ${data.id} </li>
  <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a></li>
  <li class="list-group-item p-2">Office Number: ${data.office}</li>
</ul>
</div>
</div>`;
};

const makeEngineer = function (data) {
  return `
    <div class="card border-primary col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
    <div class="card-header mb-3 text-light" style="background-color: rgb(48, 48, 245);">
        <h4>${data.name}</h4>
        <h5>Engineer</h5>
      </div>
      <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item p-2">ID: ${data.id}</li>
      <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a></li>
      <li class="list-group-item p-2"><a href = "https://github.com/${data.github}" target = "_blank">Github: ${data.github}</a></li>
    </ul>
  </div>
  </div>`;
};

const makeIntern = function (data) {
  return `
    <div class="card border-success col-6 bg-light shadow profile top-buffer" style="width: 18rem" id="employee">
          <div class="card-header mb-3 text-light" style="background-color: rgb(52, 190, 52);">
              <h4>${data.name}</h4>
              <h5>Intern</h5>
            </div>
            <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-2">ID: ${data.id}</li>
            <li class="list-group-item p-2"><a href = "mailto: ${data.email}">Email: ${data.email}</a></li>
            <li class="list-group-item p-2">School: ${data.school}</li>
          </ul>
        </div>
      </div>`;
};

//take objects in array 'team' => send to makeEmployee() functions above => push new objects (now html blocks) to teamArray 
getRole = (data) => {
  const teamArray = [];

  for (i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();
      
    if (role === "Manager") {
      const manager = makeManager(employee);

      teamArray.push(manager);
    } 
    
    if (role === "Engineer") {
      const engineer = makeEngineer(employee);

     teamArray.push(engineer);
    } 
    
    if (role === "Intern") {
      const intern = makeIntern(employee);

      teamArray.push(intern);
    }
  }

  const allEmployees = teamArray.join('');
  const pageHtmlEl = genPage(allEmployees);  //send new array into final html function
  return pageHtmlEl;
};

const genPage = function (pageHtmlEl) {

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>Profile Generator</title>
    </head>
    <body>
      <header>My Team</header>
      <div class="container">
          <div class="row" id="page">
          ${pageHtmlEl}
          </div>
          </div>
        </body>
      </html>
    `;
  }

module.exports = getRole;
