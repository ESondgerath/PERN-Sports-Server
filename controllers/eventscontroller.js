var express = require("express");
var router = express.Router();
var sequelize = require("../db");
var TEvent = sequelize.import("../models/events");

router.get("/", (req, res) => {
    TEvent.findAll()
        .then(tevent => res.status(200).json(tevent))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.post("/create", (req, res) => {
    TEvent.create({
        name: req.body.TEvent.name,
        date: req.body.TEvent.date,
        teams: req.body.TEvent.teams
    })
    .then(TEvent => res.status(200).json(TEvent))
    .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.put("/updateevent", (req, res) => {
    var tevent = req.body.TEvent.id;

    TEvent.update({
        name: req.body.TEvent.name,
        date: req.body.TEvent.date,
        teams: req.body.TEvent.teams,
    },
    {where: {id: tevent}}
    ).then(
        function updateSuccess() {
            res.json({
                name: req.body.TEvent.name,
                date: req.body.TEvent.date,
                teams: req.body.TEvent.teams,
            });
        },
        function updateError(err){
            res.send(500, err.message);
        }
    )
})

router.delete("/delete", (req, res) => {
    var eventID = req.body.TEvent.id;

    TEvent.destroy({
        where: {id: eventID}
    }).then(
        function deleteSuccess(EventDelete) {
            res.send("Event Cancelled");
        },
        function deleteError(err){
            res.send(500, err.message);
        }
    );
});

module.exports = router