import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import TeamLineup from './screens/TeamLineup';
import headerImage from './images/EPL.jpg';
import Matches from "./screens/Matches"
import Standing from "./screens/Standing";
import MainScreen from './screens/MainScreen';

ReactDOM.render(
  <React.StrictMode>
  <div className="grid-container">
    <div className="header"><img src={headerImage} alt=""/></div>
    <Standing/>
    <Matches/>
    <TeamLineup />
    <MainScreen />
    {/* <div className="container3">Container 3</div> */}
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
