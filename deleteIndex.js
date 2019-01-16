var client = require('./connection.js');

client.indices.delete({index: 'employeedata'},function(err,resp,status) {  
  console.log("delete",resp);
});