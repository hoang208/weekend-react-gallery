const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

// GET Route
router.get("/", (req, res) => {
  const sqlText = `SELECT * FROM gallery`;
  console.log("Get text", sqlText);
  pool
    .query(sqlText)
    .then((result) => {
      console.log(`GET from database`, result);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END GET Route

// POST Route
router.post("/", (req, res) => {
  const gallery = req.body;
  console.log("gallery", gallery);
  const sqlText = `INSERT INTO gallery ("path", "description")
       VALUES ($1, $2)`;
  pool
    .query(sqlText, [gallery.path, gallery.description])
    .then((result) => {
      console.log(`Added to database`, gallery);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END POST Route

// PUT Route
router.put("/like/:id", (req, res) => {
  let idToUpdate = req.params.id;
  let likes = req.body.likes + 1;
  let sqlText = `
    UPDATE "gallery" SET "likes" = $1 WHERE "id" = $2;
    `;
  pool
    .query(sqlText, [likes, idToUpdate])
    .then((result) => {
      console.log("Update in database", idToUpdate);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log(`Update request failed: ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END PUT Route

// DELETE Route
router.delete("/:id", (req, res) => {
  let idToDelete = req.params.id;
  let sqlText = `
      DELETE FROM "gallery" WHERE "id" = $1;
      `;
  pool
    .query(sqlText, [idToDelete])
    .then((result) => {
      console.log("Deleted from database ", idToDelete);
      res.sendStatus(202);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500);
    });
}); // END DELETE Route

module.exports = router;
