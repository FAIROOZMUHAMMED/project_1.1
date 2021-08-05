const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ictakalumini'
,{
    useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}
);

const Schema = mongoose.Schema;

const JobpostingSchema = new Schema({
    jobtitle:String,
    company:String,
    requirements:String,
    joblocation:String,
    exdate:String,
    qualification:String,
    type:String,
    nojobs:Number,
    email:String,
    description:String
});

var Jobdata = mongoose.model('jobdata',JobpostingSchema);

module.exports = Jobdata;