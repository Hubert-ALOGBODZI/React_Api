import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {toast} from "react-toastify";
import axios from "axios";
import "./Add.css";

const initialState = {
    name:"",
    club_player:"",
    wins:"",
    losses:"",
    points_scored:"",
}
const Add = () => {
    const[state,setState] = useState(initialState);

    const {name,club_player,wins,losses,points_scored}= state;

    const history = useNavigate();

    const { id } = useParams();

    useEffect(()=>{
        axios
        .get(`http://localhost:5000/api/get/${id}`)
        .then((resp) => setState({...resp.data[0] }));
    },[id]) ;




    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!name || !club_player || !wins || !losses || !points_scored){
            toast.error("Please provide value into each  input field");
        }else {
            if(!id) {
                axios
                .post("http://localhost:5000/api/post", {
                    name,
                    club_player,
                    wins,
                    losses,
                    points_scored,
                })
                .then(()=>{
                    setState({name:"", club_player:"",wins:"",losses:"",points_scored:"", });
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Contact added successfully ");
            }else {
                axios
                .put(`http://localhost:5000/api/update/${id}`, {
                    name,
                    club_player,
                    wins,
                    losses,
                    points_scored,
                })
                .then(()=>{
                    setState({name:"", club_player:"", wins:"", losses:"", points_scored:"" });
                })
                .catch((err) => toast.error(err.response.data));
                toast.success("Contact update successfully ");
            }

            setTimeout(() => history.push("/"),500);
        }
    }

    const handleInputChange = (e) => {
        const {name,value} = e.target;
        setState({ ...state,[name]:value});
    }
    return ( 
        <div style={{marginTop:"100px"}}>
            <form action="" style={{
                margin:"auto",
                padding:"15px",
                maxWidth:"400px",
                alignContent:"center"
            }}
            onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id='name' 
                name='name'
                placeholder='Player name'
                value={name || ""}
                onChange={handleInputChange}/><br /><br />


                <label htmlFor="club_player">club_player</label>
                <input type="text"
                id='club_player' 
                name='club_player'
                placeholder='Player club_player'
                value={club_player || ""}
                onChange={handleInputChange}/><br /><br />


                <label htmlFor="wins">wins</label>
                <input type="number"
                id='wins' 
                name='wins'
                placeholder='Player wins'
                value={wins || ""}
                onChange={handleInputChange}/><br /><br />


                <label htmlFor="losses">losses</label>
                <input type="number"
                id='losses' 
                name='losses'
                placeholder='Player losses'
                value={losses || ""}
                onChange={handleInputChange}/><br /><br />


                <label htmlFor="points_scored">points_scored</label>
                <input type="number"
                id='points_scored' 
                name='points_scored'
                placeholder='Player points_scored'
                value={points_scored || ""}
                onChange={handleInputChange}/><br /><br />


                <input type="submit" value={id ? "Update" : "save"} /><br /><br />

                <Link to="/">
                       
                        <input type="submit" value={"Go back"} />
                      
                </Link>
            </form>
        </div>
     );
}
 
export default Add;