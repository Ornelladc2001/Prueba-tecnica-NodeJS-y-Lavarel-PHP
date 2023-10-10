const mysql = require("mysql");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Conectar a MySQL y crear la base de datos si no existe
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error de conexión a MySQL:', err);
    return;
  }

  console.log('Conectado a MySQL');

  // Cambiar a la base de datos
  pool.query(`USE ${process.env.DB_DATABASE}`, (err) => {
    if (err) {
      console.error('Error al cambiar a la base de datos:', err);
      return;
    }

    // Crear la tabla si no existe
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS contactos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        address VARCHAR(255),
        subject VARCHAR(255),
        message TEXT
      )
    `;

    pool.query(createTableQuery, (tableError) => {
      connection.release();

      if (tableError) {
        console.error('Error al crear la tabla:', tableError);
        return;
      }

      console.log('Tabla "contactos" creada o ya existente.');
    });
  });
});

module.exports = pool;
