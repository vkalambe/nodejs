var client = require('./connection.js');
var inputfile = require("./employeesAdd.json");
var bulk = [];

var makebulk = function(employeelist,callback){
  for (var current in employeelist){
    bulk.push(
      { index: {_index: 'employeedata', _type: 'Employee', _id: employeelist[current].PANO } },
      {
        'name': employeelist[current].name,
        'address': employeelist[current].address
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'employeedata',
    type: 'Employee',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});
