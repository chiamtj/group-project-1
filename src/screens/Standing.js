import React from 'react';
import { useState,  useEffect } from 'react';
import './Standings.css';
import Datatable from '../components/datatable';


function Standing(){
    const [data, setData]=useState(null);

    useEffect(()=>{
        fetch('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=d48ce170-53e3-11ec-96ce-f56b42242929&season_id=1980')
        .then(res=>res.json())
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[]);
    console.log(data);
    
    return(
        // <div className="header">
        <div className="container2">
            <div className="title">
                <h3>PREMIER LEAGUE TABLE</h3>
                <h4> Season 2021-22</h4>
            </div>
            <div className="main-data">             
                <Datatable data={data}/>
            </div>   
        </div>

    )
}

export default Standing; 