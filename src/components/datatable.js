import React, { useState, useEffect } from 'react';
import {v4 as uuidv4} from 'uuid';

function Datatable({ data }) {

    const [teamName, setTeamName]= useState({})

    useEffect(()=>{
        fetch('https://app.sportdataapi.com/api/v1/soccer/teams?apikey=d48ce170-53e3-11ec-96ce-f56b42242929&country_id=42')
        .then(res=>res.json())
        .then(res=>{
        console.log(res.data);

        const teamData={}

        for (let i = 0; i <res.data.length; i++) {
         teamData[res.data[i].team_id] = res.data[i].name 
        };
        console.log(teamData);
        setTeamName(teamData);
        })
        .catch(err=>console.log(err));
    },[]);

    if (!data){ return null };
    
    const columns = ['Club', 'MP', 'W', 'D', 'L', 'GF', 'GA', 'GD', 'Pts']
    
    const {standings} = data

    const tableData = []

    if (standings) {
        // console.log(standings)
        for (let item of standings){
            // console.log(item)
            tableData.push([
                `${item.position}. ${teamName[item.team_id]}`,
                item.overall.games_played,
                item.overall.won,
                item.overall.draw,
                item.overall.lost,
                item.overall.goals_scored,
                item.overall.goals_against,
                item.overall.goals_diff,
                item.points,
            ]);
        }
    };
    console.log(tableData);

    return(
            <>
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                            {
                                columns.map((header) => <th key={uuidv4()}>{header}</th>)
                            }
                            </tr>
                        </thead>
                           
                           
                        <tbody>
                            {
                                tableData.map(item => {

                                const rowData = item.map(data => <td key={uuidv4()}>{data}</td>)

                                return(
                                        <tr key={uuidv4()}>
                                            {rowData}
                                        </tr>
                                       )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

export default Datatable;