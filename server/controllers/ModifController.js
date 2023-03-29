import pool from "../config/database.js";

 const modification = (req, res) => {
  pool.query(
    "UPDATE category SET name = ?, description = ?,  WHERE id = ?",
    [req.body.nom, req.body.prenom, req.body.email, hash, req.body.id],
    function (error, result, fields) {
      res.json(result);
    }
  );
}; 

const supprime = (req, res) => {
  pool.query(
    "DELETE FROM `category` WHERE id= 26",
    function (error, user, fields) {
      res.json(user);
      console.log(user);
    }
  );
};

export { supprime ,modification};
