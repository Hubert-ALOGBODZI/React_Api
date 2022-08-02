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






//GET METHODE

app.get('/api/get', (req, res) => {

    const sqlGet = "SELECT * FROM foot";
    db.query(sqlGet,(error,result) =>{
     res.send(result)
     });
     
    });

    //INSERTION

     app.post(`/api/post`, (req, res) => {

        const {name,club_player,wins,losses,points_scored} = req.body;
        const sqlInsert = "INSERT INTO foot (name,club_player,wins,losses,points_scored) VALUES(?,?,?,?,?)";
        db.query(sqlInsert,[name,club_player,wins,losses,points_scored],(error,result) =>{
        if (error) {
            console.log(error)
        }
         });
        });

        //DELETE
        app.delete(`/api/remove/:id`, (req, res) => {

            const { id } = req.params;
            const sqlRemove = 
            "DELETE FROM foot WHERE id = ?";
            db.query(sqlRemove,id,(err,result) =>{
            if (err) {
                console.log(err); 
            }
             });
            });
            

        app.post(`/api/get/:id`, (req, res) => {

            const { id } = req.params;
            const sqlGet = "SELECT * FROM foot Where id = ?";
            db.query(sqlGet, id, (err,result) =>{
            if (err) {
                console.log(err)
            }
            res.send(result)
             });
            });

            //update
            app.put(`/api/update/:id`, (req, res) => {

                const { id } = req.params;

                const {name, club_player, wins, losses, points_scored} = req.body;

                const sqlUpdate = `UPDATE foot SET name = ?,club_player = ?, wins = ?,losses = ?, points_scored = ? WHERE id = ? `;

                db.query(sqlUpdate,[name, club_player, wins, losses, points_scored, id],(err,result) =>{
                if (err) {
                    console.log(err)
                }
                res.send(result)
                 });
                });
        
    //     const sqlInsert = "INSERT INTO foot (name,club_player,wins,losses,points_scored) VALUES('Dakonam Djene','Getafe, Espagne',102,3,7)";
    //    db.query(sqlInsert,(err,result) =>{
    //     console.log("error",err);
    //     console.log("result",result);

    //     res.send("Hello from express")
    //     app.all('*', (req,res) => res.send("THAT ROUTE doesn't exist"))
    //     });
  







app.listen(5000,() =>
console.log(`server listen on port:5000`) 
);
