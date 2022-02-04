const Pool = require('pg').Pool;
const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:screens@localhost:5432/node_postgres'

const pool = new Pool({
    connectionString,
});

module.exports = pool;