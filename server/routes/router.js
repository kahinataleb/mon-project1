import express from "express";

import {
  accueil,
  posevelux,
  toiture,
  gouttieres,
  isolation,
  barheader,
} from "../controllers/PageController.js";

import { devis, infoclient } from "../controllers/FormController.js";
import {
  adminLogin,
  getadmin,
  deconnexion,
} from "../controllers/AdminController.js";
import {supprime ,modification} from "../controllers/ModifController.js";

const router = express.Router();

console.log(router);

//le contenu de mes page
router.get("/accueil", accueil);
router.get("/posevelux", posevelux);
router.get("/toiture", toiture);
router.get("/gouttieres", gouttieres);
router.get("/isolation", isolation);
router.get("/barheader", barheader);

// recuperation les donne de devisq
router.post("/devis", devis);

//la connexion d admin
router.post("/adminLogin", adminLogin);

// la route pour le crypte de mots de passe
//router.post("/formadmin", formadmin);


//router.post("/deconnexion", deconnexion);

router.get("/getadmin", getadmin);
//tout le contenu de ma bdd

router.get("/infoclient", infoclient);


router.post("/supprime", supprime);

router.post("/modification" ,modification)

export default router;
