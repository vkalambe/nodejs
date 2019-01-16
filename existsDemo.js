var client = require('./connection.js');
 client.exists({
  index: 'employeedata',
  type: 'Employee',
  id: 3
});