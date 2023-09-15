const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

// DO NOT MODIFY THIS FILE FOR BASE MODE

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

module.exports = router;
