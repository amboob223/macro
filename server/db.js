const POOL = require("pg").Pool;
const pool = new POOL({
    user: "playabook",
    password: "8896",
    port: 5432,
    database: "gdp",
    host: "localhost"
});

module.exports = pool