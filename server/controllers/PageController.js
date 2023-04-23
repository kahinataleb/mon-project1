import pool from "../config/database.js";

const accueil = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.title, prestations.subtitle FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 4 ;
    `,
    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);
      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);
      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};




// La fonction prend les objets de requête et de réponse en tant que paramètres
const posevelux = (req, res) => {
  // Utilisation de l'objet "pool" pour interroger la base de données
  // La requête SQL SELECT récupère les descriptions de catégories, les noms de catégories, les images de prestations et les sous-titres de prestations en utilisant une jointure interne entre les tables "category" et "prestations"
  // L'opérateur LIMIT est utilisé pour spécifier une plage de résultats à récupérer (à partir de la quatrième ligne, récupérer 4 résultats)
  pool.query(
    `SELECT category.description , category.name , prestations.picture ,prestations.title, prestations.subtitle FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 4 , 4 `,
    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);

      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);

      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};




const toiture = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture ,prestations.title, prestations.subtitle FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 16 , 4 `,

    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);
      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);
      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};

const gouttieres = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture ,prestations.title, prestations.subtitle FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 8 , 4;   `,

    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);
      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);
      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};

const isolation = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture ,prestations.title , prestations.subtitle 
    FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 12 , 4  `,

    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);
      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);
      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};

const barheader = (req, res) => {
  pool.query(
    //récupérer uniquement les 4 éléments suivants à partir de la 12ème ligne de la table. ulitisant limit
    `SELECT category.description , category.name , prestations.picture , prestations.title FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 20 , 5 `,

    function (error, img, fields) {
      // Renvoyer les données récupérées sous forme de JSON dans la réponse
      res.json(img);
      // Afficher les erreurs éventuelles dans la console pour le débogage
      console.log(error);
      // Afficher les données récupérées dans la console pour le débogage
      console.log(img);
    }
  );
};

const allprestations = (req, res) => {
 
  pool.query("SELECT * FROM `prestations`", function (error, contenu, fields) {
    // Renvoyer les données récupérées sous forme de JSON dans la réponse
    res.json(contenu);

    // Afficher les données récupérées dans la console pour le débogage
    console.log(contenu);

    // Afficher les erreurs éventuelles dans la console pour le débogage
    console.log(error);
  });
};

 const allcategory = (req, res) => {
 
  pool.query("SELECT * FROM `category`", function (error, txt, fields) {
    // Renvoyer les données récupérées sous forme de JSON dans la réponse
    res.json(txt);

    // Afficher les données récupérées dans la console pour le débogage
    console.log(txt);

    // Afficher les erreurs éventuelles dans la console pour le débogage
    console.log(error);
  });
}; 


export { accueil, posevelux, toiture, gouttieres, isolation, barheader ,allprestations ,allcategory };


