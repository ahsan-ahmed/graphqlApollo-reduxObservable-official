const { mongoose } = require("../../dbConfig");

var User = mongoose.model("User", {
  firstname: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  lastname: {
    type: String,
    minlength: 1,
    required: true,
    trim: true
  },
  gpa: {
    type: String,
    minlength: 2,
    require: true,
    trim: true
  },
  rollno:{
    type: Number,
    minlength: 2,
    require: true,
    trim: true
  }
});

module.exports = { User };