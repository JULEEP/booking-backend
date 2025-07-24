const pool = require('../db');

exports.createUser = async (name, email, mobile, password) => {
  const result = await pool.query(
    'INSERT INTO users (name, email, mobile, password) VALUES ($1, $2, $3, $4) RETURNING *',
    [name, email, mobile, password]
  );
  return result.rows[0];
};




exports.findUserByMobile = async (mobile) => {
  const result = await pool.query(
    'SELECT * FROM users WHERE mobile = $1',
    [mobile]
  );
  return result.rows[0];
};