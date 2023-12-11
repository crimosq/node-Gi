
// Import the express module
const express = require('express');
// Create an Express application
const app = express();
// Import employee data from a local JSON file
const employeeData = require('./employee.json');

//Defining port number
const port = 3000;

// Route for the root url
app.get('/', (req, res) => {
    res.send(`
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              text-align: center;
              padding-top: 50px;
            }
            h1 {
              color: #333;
            }
          </style>
        </head>
        <body>
          <h1>Let's Find The Employees</h1>
        </body>
      </html>`
      );
  });

// // Route to get all employees
  app.get('/employee', (req, res) => {
    res.json(employeeData);
  });
  
  // Route to get an employee by ID 
app.get('/employee/:employeeID', (req, res) => {
  // Extract employeeID from the route parameter
  const employeeID = req.params.employeeID;
  // finding the employee in the employeeData array
  const employee = employeeData.find(emp => emp.employeeID.toString() === employeeID);
//Checks in Employee was found
  if (employee) {
    res.json(employee);

  } else {
    res.status(404).send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            text-align: center;
            padding-top: 50px;
          }
          h1, h2{
            color: red;
          }
        </style>
      </head>
      <body>
        <h1>Employee not found</h1>
        <h2> Please Try again<h2>
      </body>
    </html>`);
  }
});


app.listen(port, () => {
  console.log(`Server running at port:${port}`);
});

