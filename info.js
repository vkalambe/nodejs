var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("-- Client Health --",resp);
});

client.count({index: 'employeedata',type: 'Employee'},function(err,resp,status) {  
  console.log("constituencies",resp);
});