var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/practice';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });



// Crate new instance of Client. interacts with database/est communication w by using connect()
// set run a SQL query via query()
// communication closed via end()
