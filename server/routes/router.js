import express from "express";

import {
  accueil,
  posevelux,
  toiture,
  gouttieres,
  isolation,
  barheader,
  allprestations,
  allcategory,
} from "../controllers/PageController.js";

import { devis, infoclient } from "../controllers/FormController.js";
import {
  adminLogin,
  getadmin,
  formadmin,
  UpdateAdmin,
} from "../controllers/AdminController.js";
import {
  deleteData,
  /* deleteCategory1, */
 /*  deleteData1, */
  updateAllPrestation,
  updateAllCategory,
  deletePrestations,
  deleteCategory} from "../controllers/ModifController.js";

const router = express.Router();

console.log(router);

//le contenu de mes page
router.get("/accueil", accueil);
router.get("/posevelux", posevelux);
router.get("/toiture", toiture);
router.get("/gouttieres", gouttieres);
router.get("/isolation", isolation);
router.get("/barheader", barheader);

//les images ,titre  et le sous-titre de mon site
router.get("/allprestations", allprestations);

//les description et name
router.get("/allcategory", allcategory);

// recuperation les donne de devisq
router.post("/devis", devis);

//la connexion d admin
router.post("/adminLogin", adminLogin);

// la route pour le crypte de mots de passe
router.post("/formadmin", formadmin);

//la mise a jour des donne
router.post("/UpdateAdmin", UpdateAdmin);

//information de l' admin
router.get("/getadmin", getadmin);

//la route pour requpere les information de client
router.get("/infoclient", infoclient);

//router.get("/api/respond/:responseEmail", infoclient1);

//la suppression les messages de info client
router.delete("/api/delete/:id", deleteData);

/* // les suppri des donnees des contenu de mes page
router.delete("/prestations", deleteData1); */

//gere la modification de image , titre , sous-titre
router.put("/allprestations/:id", updateAllPrestation);

//gere la modification de name et descripction
router.put("/allCategory/:id", updateAllCategory);



//la suppression des donne de prestation par id
router.delete("/allprestations/:id", deletePrestations);


//la suppression des donne de Ctegory par id
router.delete("/allcategory/:id", deleteCategory);

/* router.delete("/deleteCategory/:id", deleteCategory1); */

//la mise a jour les donne de chanque
//router.put("/toiture/:id", modification);

/* router.put("/modification/:id", modification);

//la mise a jour
router.put("/articles/:id", updateArticle);

//la mise a jour
router.put("/prestations/:id", updatePrestation);

 */
/* router.post("/prestation/:prestationId", updatePrestation);
 */
export default router;
