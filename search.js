var client = require('./connection.js');

client.search({  
  index: 'employeedata',
  type: 'Employee',
  body: {
    query: {
      match: { "name": "Vishal" }
    },
  }
},function (error, response,status) {
    if (error){
      console.log("search error: "+error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
    }
});

/*For an example of a wildcard search, search for constituency names starting with any three characters followed by 'wich':
query: {  
  wildcard: { "constituencyname": "???wich" }
}*/

/*For an example of a regular expression search, search for constituency names starting with one or more characters followed by 'wich':
query: {  
  regexp: { "constituencyname": ".+wich" }
}*/