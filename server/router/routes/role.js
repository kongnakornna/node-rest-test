"use strict";

const crypto = require("crypto"),
  authentication = require("../../modules/authentication");

module.exports = (app, db) => {
  app.get("/api/roles", authentication.isAuthorized, (req, res) => {
    db.mainDb.role
      .findAll()
      .then(roles => {
        res.json(roles);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  app.get("/api/roles/:id", authentication.isAuthorized, (req, res) => {
    db.mainDb.role
      .find({
        where: { id: req.params.id }
      })
      .then(role => {
        res.json(role);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

  app.post("/api/roles", authentication.isAuthorized, (req, res) => {
    db.mainDb.role
      .create(req.body)
      .then(newRole => {
        res.json({
          status: "OK",
          role: newRole
        });
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

  app.put("/api/roles/:id", authentication.isAuthorized, (req, res) => {
    db.mainDb.role
      .update(req.body, { where: { id: req.params.id } })
      .then(updatedRole => {
        if (updatedRole) {
          res.json("Updated Successfully");
        }
      })
      .catch(err => {
        res.status(500).send(err);
      });
  });

  app.delete("/api/roles/:id", authentication.isAuthorized, (req, res) => {
    db.mainDb.role
      .destroy({
        where: { id: req.params.id }
      })
      .then(deletedRole => {
        if (deletedRole === 0) {
          res.sendStatus(404);
        } else if (deletedRole === 1) {
          res.json("Deleted Successfully");
        } else {
          res.sendStatus(400);
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
};
