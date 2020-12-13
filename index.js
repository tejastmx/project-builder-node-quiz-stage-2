var { MongoClient } = require("mongodb");
var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log("Connected to mongodb");
  db.close();
});

// mongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   let dbo = db.db("QUIZ");
//   dbo.createCollection("question", (err, res) => {
//     if (err) throw err;
//     console.log("created collection question");
//   });

//   dbo.createCollection("options", (err, res) => {
//     if (err) throw err;
//     console.log("created collection options");
//   });

//   dbo.createCollection("answers", (err, res) => {
//     if (err) throw err;
//     console.log("created collection answers");
//   });
// });

const question = [
  { question: "5+3=?" },
  { question: "6-3=?" },
  { question: "10*10" },
];

const options = [
  { options: ["7", "8", "3", "4"] },
  { options: ["4", "5", "6", "2"] },
  { options: ["10", "1000", "100", "90"] },
];

const answers = [{ answer: "8" }, { answer: "3" }, { answer: "100" }];

// mongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   var dbo = db.db("quiz");

//   dbo.collection("question").insertMany(question, (err, res) => {
//     if (err) throw err;
//     console.log("documents inserted into questions collection");
//   });

//   dbo.collection("options").insertMany(options, (err, res) => {
//     if (err) throw err;
//     console.log("documents inserted into options collection");
//   });

//   dbo.collection("answers").insertMany(answers, (err, res) => {
//     if (err) throw err;
//     console.log("documents inserted into answers collection");
//   });
//   db.close();
// });


MongoClient.connect(url,(err,db)=>{
    if(err) throw err
    var dbo = db.db("quiz")

    // Display only one question
    dbo.collection("question").findOne({ question: "5+3=?"},(err,res)=>{
        if(err) throw err
        console.log(res);
        db.close()
    })

    // Display all qustions
    dbo.collection("question").find({}).toArray(function(err, res) {
        if (err) throw err
        console.log("Found");
        console.log(res);
        db.close()
    })
})