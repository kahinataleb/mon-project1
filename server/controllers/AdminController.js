import pool from "../config/database.js";

import bcrypt from "bcrypt";

// Initialiser le nombre de tours de hashage pour le sel à 10
const saltRounds = 10;

//la requete pour crypte le mot de passe
const formadmin = (req, res) => {
  // Hasher le mot de passe entré par l'utilisateur avant de l'insérer dans la base de données
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Insérer les données de l'utilisateur dans la table "user" avec le mot de passe hashé
    pool.query(
      "INSERT INTO user (nom, prenom, email, password) VALUES (?, ?, ?, ?)",
      [req.body.nom, req.body.prenom, req.body.email, hash],
      function (error, result, fields) {
        // Renvoyer le résultat de la requête sous forme de JSON dans la réponse
        res.json(result);
        // Afficher l'erreur éventuelle dans la console pour le débogage
        console.log(error);
        // Affiche le résultat de la requête dans la console pour le débogage
        console.log(result);
      }
    );
  });
};

// Définir une fonction pour gérer la demande de connexion de l'administrateur
const adminLogin = (req, res) => {
  // Utiliser la fonction query() de l'objet pool pour interroger la base de données
  pool.query(
    "SELECT * FROM user WHERE email= ? ",
    [req.body.email],
    // Fonction de rappel pour gérer les résultats de la requête
    function (error, result, fields) {
      // Afficher l'erreur éventuelle dans la console pour le débogage
      console.log(error);
      // Affiche le résultat de la requête dans la console pour le débogage
      console.log(result);
      // Si la requête ne renvoie aucun résultat, renvoyer un message d'erreur
      if (result.length === 0) {
        res.json({ reponse: false, message: "L'identifiant n'existe pas" });
        console.log("result");
      } else {
        // Sinon, utiliser la fonction compare() de bcrypt pour comparer le mot de passe saisi avec le hash stocké dans la base de données
        bcrypt.compare(
          req.body.password,
          result[0].password,
          // Fonction de rappel pour gérer le résultat de la comparaison
          function (err, result2) {
            // Afficher l'erreur éventuelle dans la console pour le débogage
            console.log(err);
            // Affiche le résultat de la requête dans la console pour le débogage
            console.log(result2);
            // Si la comparaison échoue, renvoyer un message d'erreur
            if (!result2) {
              res.json({
                reponse: false,
                message: "Le mot de passe n'est pas correct",
              });
            } else {
              // Sinon, renvoyer une réponse positive et l'ID de l'utilisateur
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

//la requête pour récupérer les données de user de la base de donne
const getadmin = (req, res) => {
  // Requête pour sélectionner nom , prenom de la table "user"
  pool.query(
    "SELECT prenom ,nom  FROM `user` ",
    function (error, user, fields) {
      // Renvoie le résultat de la requête sous forme de JSON dans la réponse
      res.json(user[0]);
      // Affiche le résultat de la requête dans la console pour le débogage
      console.log(user);
      // Afficher l'erreur éventuelle dans la console pour le débogage
      console.log(error);
    }
  );
};


// Au cas où on voudrait modifier l'admin
const UpdateAdmin = (req, res) => {
  // Hasher le mot de passe entré par l'utilisateur avant de le mettre à jour dans la base de données
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    // Mettre à jour les données de l'utilisateur dans la table "user" avec le mot de passe hashé
    pool.query(
      "UPDATE user SET nom = ?, prenom = ?, email = ?, password = ? WHERE id = 7",
      [req.body.nom, req.body.prenom, req.body.email, hash, req.body.id],
      function (error, result, fields) {
        // Renvoyer le résultat de la requête sous forme de JSON dans la réponse
        res.json(result);
        // Afficher le résultat de la requête dans la console pour le débogage
        console.log(result);
        // Afficher l'erreur éventuelle dans la console pour le débogage
        console.log(error);
      }
    );
  });
};

export { adminLogin, getadmin, UpdateAdmin, formadmin };
