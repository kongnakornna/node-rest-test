"use strict";

module.exports = (app, db) => {
    app.get("/api/status", (req, res) => {
        res.setHeader('Content-Type', 'text/plain ');
        res.send('.');
    });
};