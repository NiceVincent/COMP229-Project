let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
//create a reference to the db Schema which is the model
let incidentRecord = require("../models/incidentRecords");

//we want to display the incidentRecordList
module.exports.displayDashboard = (req, res, next) => {
  incidentRecord
    .find()
    .sort({ lastName: "asc" })
    .exec((err, incidentRecordList) => {
      if (err) {
        return console.error(err);
      } else {
        res.render("dashboard", {
          title: "Dashboard",
          incidentRecordList: incidentRecordList,
          displayName: req.user ? req.user.displayName : "",
        });
      }
    });
};
module.exports.displayAddIncidentRecord = (req, res, next) => {
  res.render("incidentRecord/add", {
    title: "Add Incident Record",
    displayName: req.user ? req.user.displayName : "",
  });
};
