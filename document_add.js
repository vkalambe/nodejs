var client = require('./connection.js');

client.index({  
  index: 'employeedata',
  id: '1',
  type: 'Employee',
  body: {
    "name": "Vishal",
    "address": "HYD",
  
  }
},function(err,resp,status) {
    console.log(resp);
});