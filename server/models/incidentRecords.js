let mongoose = require("mongoose");
let incidentRecordModel = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    collection: "incidentRecord",
  }
);

module.exports = mongoose.model("incidentRecord", incidentRecordModel);
