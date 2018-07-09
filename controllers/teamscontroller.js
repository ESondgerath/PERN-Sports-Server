var express = require("express");
var router = express.Router();
var sequelize = require("../db");
var Teams = sequelize.import("../models/teams");

router.get('/', (req, res) => {
    Teams.findAll()
        .then(team => res.status(200).json(team))
        .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.post("/create", (req, res) => {
    Teams.create({
        name: req.body.Teams.name,
        teamowner: req.body.Teams.teamowner
    })
    .then(Teams => res.status(200).json(Teams))
    .catch(err => res.status(500).json({error: err.errors[0].message}))
})

router.put("/updateteam", (req, res) => {
    var team = req.body.Teams.id;

    Teams.update({
        name: req.body.Teams.name,
        teamowner: req.body.Teams.teamowner
    },
    {where: {id: team}}
    ).then(
        function updateSuccess() {
            res.json({
                name: req.body.Teams.name,
                teamowner: req.body.Teams.teamowner
            });
        },
        function updateError(err){
            res.send(500, err.message);
        }
    )
})

router.delete("/delete", (req, res) => {
    var teamID = req.body.Teams.id;

    Teams.destroy({
        where: {id: teamID}
    }).then(
        function deleteSuccess(TeamDelete) {
            res.send("Team Removed");
        },
        function deleteError(err){
            res.send(500, err.message);
        }
    );
});

module.exports = router;