import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import {toast} from "react-toastify";
import axios from "axios";



const Home = () => {
    const [data, setData] = useState([]);

    const loadData = async() =>{
        const response = await axios.get("http://localhost:3000");
        setData(response.data);
    };

    useEffect(()=>{
        loadData();
    },[]);

    return ( 
        <div style={{marginTop:"150px"}}>
            <Link to="/Add">
            <button className="btn btn-contact">Add</button>
            </Link>
                    <table className="styled-table">
                <thead>
                    <tr>
                        <th style={{textAlign : "center"}}>No.</th>
                        <th style={{textAlign : "center"}}>Nom</th>
                        <th style={{textAlign : "center"}}>club_player</th>
                        <th style={{textAlign : "center"}}>wins</th>
                        <th style={{textAlign : "center"}}>losses</th>
                        <th style={{textAlign : "center"}}>points_scored</th>
                        
                    </tr>
                </thead>
                   <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row" >{index+1}</th>
                                <td>{item.name}</td>
                                <td>{item.club_player}</td>
                                <td>{item.wins}</td>
                                <td>{item.losses}</td>
                                <td>{item.points_scored}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className="btn btn-edit">Edit</button>
                                    </Link>
                                    <button className="btn btn-delete"  >Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className="btn btn-view">View</button>
                                    </Link>

                                </td>

                            </tr>
                        )
                    })} 
                </tbody> 
            </table>
        </div>
     );
}
 
export default Home;