import pool from "../config/database.js";

const devis = (req, res) => {
  pool.query(
    `INSERT INTO form (nom , postale ,  email , téléphone , message ) VALUES (?, ?, ?, ? , ?)`,
    [
      req.body.nom,
      req.body.postale,
      req.body.email,
      req.body.telephone,
      req.body.message,
    ],
    function (error, txt, fields) {
      res.json(txt);
      console.log(error);
    }
  );
};

const infoclient = (req, res) => {
  pool.query("SELECT * FROM `form`", function (error, info, fields) {
    res.json(info);
    console.log(info);
  });
};

export { devis, infoclient };
