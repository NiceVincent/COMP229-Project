let mongoose = require("mongoose");
let incidentRecord = mongoose.Schema(
  {
    recordNumber: {
      type: String,
      required: true,
    },
    incidentNarrative: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    collection: "incidentRecord",
  }
);

module.exports = mongoose.model("incidentRecord", incidentRecord);
