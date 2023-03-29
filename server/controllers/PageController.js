import pool from "../config/database.js";

const accueil = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite  FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 4;`,
    function (error, txt, fields) {
      console.log(txt);
      res.json(txt);
    }
  );
};

const posevelux = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 4 , 4 `,
    function (error, img, fields) {
      res.json(img);
    }
  );
};

const toiture = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 16 , 4   `,

    function (error, img, fields) {
      res.json(img);
      console.log(img);
    }
  );
};

const gouttieres = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 8 , 4   `,

    function (error, img, fields) {
      res.json(img);
      console.log(img);
    }
  );
};

const isolation = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 12 , 4  `,

    function (error, img, fields) {
      res.json(img);
      console.log(img);
    }
  );
};

const barheader = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id LIMIT 20 , 4 `,

    function (error, img, fields) {
      res.json(img);
      console.log(img);
    }
  );
};

const allformation = (req, res) => {
  pool.query(
    `SELECT category.description , category.name , prestations.picture , prestations.subtite FROM category INNER JOIN prestations ON category.id = prestations.category_id `,

    function (error, contenu, fields) {
      res.json(contenu);
      console.log(contenu);
    }
  );
};

export {
  accueil,
  posevelux,
  toiture,
  gouttieres,
  isolation,
  barheader,
  allformation,
};
