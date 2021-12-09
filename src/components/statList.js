import {v4 as uuidv4} from "uuid";


function statList(props){
    return(
        <table className="htable">
          <tr>
            <th>Team</th>
            <th>Goals Scored</th>
            <th>Goals Conceded</th>
            <th>Matches Played</th>
            <th>Win</th>
            <th>Losses</th>
            <th>Draw</th>
          </tr>
          {props.teamStatList.map((team) => (
            <tr key = {uuidv4()}> 
              <td>
                  <div className = "hteam">
                  <img className= "hteamLogo" src= {team.response.team.logo} alt=""/>{team.response.team.name}
                  </div>
              </td>
              <td>{team.response.goals.for.total.total}</td>
              <td>{team.response.goals.against.total.total}</td>
              <td>{team.response.fixtures.played.total}</td>
              <td>{team.response.fixtures.wins.total}</td>
              <td>{team.response.fixtures.loses.total}</td>
              <td>{team.response.fixtures.draws.total}</td>
            </tr>
          ))}
        </table>
    )
}

export default statList;