import pool from "../config/database.js";

//la requete qui permis de rentrer les données de client qui a besoin de devis
const devis = (req, res) => {
  // Insérer les données du formulaire de devis dans la table "form"
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
      // Renvoyer le résultat de la requête sous forme de JSON dans la réponse
      res.json(txt);

      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);

      // Afficher le résultat de la requête dans la console pour le débogage
      console.log(txt);
    }
  );
};









//la requete pour récupérer les informations de client qui a rempli le formulaire et les recupere dans la connexion
const infoclient = (req, res) => {
  // Utiliser la fonction query() de l'objet pool pour interroger la table "form" et récupérer toutes les données
  pool.query("SELECT * FROM `form`", function (error, info, fields) {
    // Renvoyer les données récupérées sous forme de JSON dans la réponse
    res.json(info);

    // Afficher les données récupérées dans la console pour le débogage
    console.log(info);

    // Afficher les erreurs éventuelles dans la console pour le débogage
    console.log(error);
  });
};


export { devis, infoclient };
