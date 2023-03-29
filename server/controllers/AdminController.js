import pool from "../config/database.js";

import bcrypt from "bcrypt";


//const saltRounds = 10;

const adminLogin = (req, res) => {
  pool.query(
    "SELECT * FROM user WHERE email= 'lounescouverture@gmail.com' ",
    [req.body.email],
    function (error, result, fields) {
      if (result.length === 0) {
        res.json({ reponse: false, message: "L'identifiant n'existe pas" });
        console.log("result");
      } else {
        bcrypt.compare(
          req.body.password,
          result[0].password,
          function (err, result2) {
            if (!result2) {
              res.json({
                reponse: false,
                message: "Le mot de passe n'est pas correct",
              });
            } else {
              res.json({
                reponse: true,
                id: result[0].id,
              });
            }
          }
        );
      }
    }
  );
};

const getadmin = (req, res) => {
  pool.query("SELECT * FROM `user`", function (error, user, fields) {
    res.json(user);
    console.log(user);
  });
};

const deconnexion = (req ,res ) => {
  req.session.destroy((err) => {
   res.redirect("/");
  })
}

//la requete pour crypte le mot de passe

/* const formadmin = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    pool.query(
      "INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
      [req.body.nom, req.body.prenom, req.body.email, hash],
      function (error, result, fields) {
        res.json(result);
      }
    );
  });
}; */

export { adminLogin, getadmin ,deconnexion };
