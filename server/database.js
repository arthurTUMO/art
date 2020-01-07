const { Pool } = require('pg');
// Add postsgreSQL database as a client

const pool = new Pool({
  connectionString: 'postgres://nhgtbarzaolayr:a8c3f1fe38e84ce5b244556064e00b6f812dbb859605a2d2d57340b492f06795@ec2-46-51-190-87.eu-west-1.compute.amazonaws.com:5432/d692v913riu8q',
  ssl: true
});

module.exports = pool;
