var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  host: 'https://shrouded-depths-23225.herokuapp.com:process.env.PORT',
  log: 'trace'
});

module.exports = client; 