const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const mysql = require("mysql2");

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"crud_contact",
    port:3307
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));








app.get('/api/get', (req, res) => {

    const sqlGet = "SELECT * FROM foot";
    db.query(sqlGet,(err,result) =>{
    

     res.send(result)
     });
        
    //     const sqlInsert = "INSERT INTO foot (name,club_player,wins,losses,points_scored) VALUES('Dakonam Djene','Getafe, Espagne',102,3,7)";
    //    db.query(sqlInsert,(err,result) =>{
    //     console.log("error",err);
    //     console.log("result",result);

    //     res.send("Hello from express")
    //     app.all('*', (req,res) => res.send("THAT ROUTE doesn't exist"))
    //     });
  


});




app.listen(5000,() =>
console.log("server listen on port:5000 ") 
);
