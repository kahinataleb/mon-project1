import mysql from "mysql";

let pool = mysql.createPool({
  //le nombre maximum de connexions que le pool peut avoir en même temps.
  connectionLimit: 10000,
  host: "db.3wa.io", // on rentre l'hôte l'adresse url où se trouve la bdd // root
  user: "kahinataleb", // identifiant BDD
  password: "48b0f588888001b8dcd57ba3e811be18", // le password
  database: "kahinataleb_lounescouverture", // nom de la base de donnée
});

// Connexion à la DDB avec  pool
pool.getConnection((err, connection) => {
  console.log("Connected to the database");
  if (err) throw err;
});

export default pool;
