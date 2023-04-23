import pool from "../config/database.js";



/**la modigication de  la table Prestation  */
const updateAllPrestation = (req, res) => {
   // Extract the `id` parameter from the request URL
  const { id } = req.params;
    // Extract the `picture`, `title`, and `subtitle` properties from the request body
  const { picture, title, subtitle } = req.body;
 // Execute a SQL query to update the `prestations` table in the database
  pool.query(
    "UPDATE prestations SET picture=?, title=?, subtitle=? WHERE id=?",
    [picture, title, subtitle, id],
    (error, results) => {
      // S’il y a une erreur, consignez-la sur la console et lancez une erreur de serveur
      if (error) {
        console.error(error);
        throw new Error("Erreur serveur");
      }
      //Si la requête réussit, envoyez une réponse de réussite à la cliente
      res
        .status(200)
        .json({ message: `Prestation ${id} mise à jour avec succès.` });
    }
  );
};
/**la modigication de  la table Category  */
const updateAllCategory = (req, res) => {
   // Extract the `id` parameter from the request URL
  const { id } = req.params;
  const { name, description } = req.body;

  pool.query(
    "UPDATE category SET name=?, description=? WHERE id=?",
    [name, description, id],
    (error, results) => {
      if (error) {
        console.error(error);
        throw new Error("Erreur serveur");
      }
      res
        .status(200)
        .json({ message: `category ${id} mise à jour avec succès.` });
    }
  );
};


//la requete qui permet de surprimer les donnees de la base de donnees
const deleteData1 = (req, res) => {
  // Récupération des données à supprimer depuis la requête POST
  const { description, name } = req.body;

  // Définition de la requête SQL pour supprimer les prestations associées à une certaine catégorie
  const sql = `DELETE FROM prestations
               WHERE category_id IN (
                 SELECT id
                 FROM category
                 WHERE description = ? AND name = ?
               )`;

               

  // Exécution de la requête SQL avec les données récupérées depuis la requête POST
  pool.query(sql, [description, name], (err, results) => {
    if (err) {
      // Gestion de l'erreur en cas de problème avec la requête SQL
      console.error(err);
      res.status(500).send("Erreur serveur");
      return;
    }
    // Affichage du nombre de lignes supprimées
    console.log("Number of rows deleted:", results.affectedRows);
    // Envoi d'une réponse au client pour indiquer que la suppression s'est bien déroulée
    res.send("Données supprimées");
  });
}; 



/* const deleteCategory1 = (req, res) => {
  const sql1 = `SELECT id FROM category`;

  pool.query(sql1, (err1, results1) => {
    if (err1) {
      console.error(err1);
      res.status(500).send("Erreur serveur");
      return;
    }

    results1.forEach((row) => {
      const sql2 = `DELETE FROM prestations WHERE category_id = ?`;

      pool.query(sql2, [row.id], (err2, results2) => {
        if (err2) {
          console.error(err2);
          res.status(500).send("Erreur serveur");
          return;
        }

        const sql3 = `DELETE FROM category WHERE id = ?`;

        pool.query(sql3, [row.id], (err3, results3) => {
          if (err3) {
            console.error(err3);
            res.status(500).send("Erreur serveur");
            return;
          }

          console.log(`Row with id ${row.id} deleted.`);
        });
      });
    });

    res.send("Données supprimées");
  });
}; */


//la fonction pour supprime les donnees entre par le tabel prestation
const deletePrestations = (req, res) => {
  // Extraction de l'ID de la requête et stockage dans une variable `id`
  const id = req.params.id;
  // Définition de la requête SQL pour supprimer l'élément de la table `prestations` où l'ID correspond à la variable `id`
  const sql = "DELETE FROM prestations WHERE id = ?";
  // Utilisation du pool de connexion `pool` pour exécuter la requête SQL
  pool.query(sql, [id], (err, result) => {
    // Vérification s'il y a une erreur dans l'exécution de la requête SQL
    if (err) {
      // Affichage d'un message d'erreur dans la console
      console.error(err.message);
      // Envoi d'une réponse JSON avec un message d'erreur générique pour l'utilisateur
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      // Envoi d'une réponse JSON avec un message de confirmation indiquant que l'élément a été supprimé avec succès
      res.json({ message: `L'élément avec l'ID ${id} a été supprimé` });
    }
  });
};

//la fonction pour supprime les donnees entre par le tabel catygory
const deleteCategory = (req, res) => {
  // Extraction de l'ID de la requête et stockage dans une variable `id`
  const id = req.params.id;
  // Définition de la requête SQL pour supprimer l'élément de la table `prestations` où l'ID correspond à la variable `id`
 
  const sql = "DELETE FROM category WHERE id = ?";

  // Utilisation du pool de connexion `pool` pour exécuter la requête SQL
  pool.query(sql, [id], (err, result) => {
    // Vérification s'il y a une erreur dans l'exécution de la requête SQL
    if (err) {
      // Affichage d'un message d'erreur dans la console
      console.error(err.message);
      // Envoi d'une réponse JSON avec un message d'erreur générique pour l'utilisateur
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      // Envoi d'une réponse JSON avec un message de confirmation indiquant que l'élément a été supprimé avec succès
      res.json({ message: `L'élément avec l'ID ${id} a été supprimé` });
    }
  });
};




//la fonction pour supprime les donnees entre par le remplissage de devis
const deleteData = (req, res) => {
  // Extraction de l'ID de la requête et stockage dans une variable `id`
  const id = req.params.id;
  // Définition de la requête SQL pour supprimer l'élément de la table `prestations` où l'ID correspond à la variable `id`
  const sql = "DELETE FROM form WHERE id = ?";
  // Utilisation du pool de connexion `pool` pour exécuter la requête SQL
  pool.query(sql, [id], (err, result) => {
    // Vérification s'il y a une erreur dans l'exécution de la requête SQL
    if (err) {
      // Affichage d'un message d'erreur dans la console
      console.error(err.message);
      // Envoi d'une réponse JSON avec un message d'erreur générique pour l'utilisateur
      res.status(500).json({ error: "Erreur serveur" });
    } else {
      // Envoi d'une réponse JSON avec un message de confirmation indiquant que l'élément a été supprimé avec succès
      res.json({ message: `L'élément avec l'ID ${id} a été supprimé` });
    }
  });
};

export {
  deleteData,
 /*  deleteData1, */
  deletePrestations,
  deleteCategory,
  updateAllPrestation,
  updateAllCategory,
  /* deleteCategory1 */
};
