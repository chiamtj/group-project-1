import React from "react";
import API from "../components/statsAPI";
import { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import "./MainScreen.css";
import Seasons from "../components/seasons";
import StatList from "../components/statList";

function MainScreen() {

  const [teamStatList, setTeamStatList] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("2010");

  const eplTeamArray = [
    {
      id: 33,
      name: "Manchester United",
      logo: "https://media.api-sports.io/football/teams/33.png",
    },
    {
      id: 34,
      name: "Newcastle",
      logo: "https://media.api-sports.io/football/teams/34.png",
    },
    {
      id: 38,
      name: "Watford",
      logo: "https://media.api-sports.io/football/teams/38.png",
    },
    {
      id: 39,
      name: "Wolves",
      logo: "https://media.api-sports.io/football/teams/39.png",
    },
    {
        id: 40,
        name: "Liverpool",
        logo: "https://media.api-sports.io/football/teams/40.png"
    },
    {
        id: 41,
        name: "Southampton",
        logo: "https://media.api-sports.io/football/teams/41.png"
    },
    {
        id: 42,
        name: "Arsenal",
        logo: "https://media.api-sports.io/football/teams/42.png"
    },
    {
        id: 44,
        name: "Burnley",
        logo: "https://media.api-sports.io/football/teams/44.png"
    },
    {
        id: 45,
        name: "Everton",
        logo: "https://media.api-sports.io/football/teams/45.png"
    },
    {
        id: 46,
        name: "Leicester",
        logo: "https://media.api-sports.io/football/teams/46.png"
    },
    {
        id: 47,
        name: "Tottenham",
        logo: "https://media.api-sports.io/football/teams/47.png"
    }
  ];

  useEffect(() => {
    retrieveTeamStatsFromAPI();
  }, [selectedSeason]);


  async function retrieveTeamStatsFromAPI() {
    console.log("TEAM STATS RETRIEVE");
    var i;
    const teamStat = [];
    for (i = 0; i < eplTeamArray.length; i++) {
      const { data } = await API.get("/statistics", {
        params: {
          league: "39",
          season: selectedSeason,
          team: eplTeamArray[i]["id"].toString(),
        },
      });
      teamStat.push(data);
      console.log(data)
    }
    setTeamStatList(teamStat);
  }

  function handleSeasonSelect(updateSeason) {
    setSelectedSeason(updateSeason);
  }

  // return (
  //   <>
  //     {/* <div className="MainContainer"> */}
  //     <div className="container3">
  //     <h3>TEAM STATISTICS</h3>
  //       <h4>Select Season</h4>
  //       <Seasons passToScreen={handleSeasonSelect} />
  //       <StatList teamStatList={teamStatList} />
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className="container3">
      <h1>TEAM STATISTICS</h1>
        <h2>Select Season</h2>
        <Seasons passToScreen={handleSeasonSelect} selectedSeason={selectedSeason} />
        <StatList teamStatList={teamStatList} />
      </div>
    </>
  );
}

export default MainScreen;