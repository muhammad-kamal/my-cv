import React from "react";
import "./_hobbies.css";
import PoolIcon from '@mui/icons-material/Pool';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

function Hobbies() {
  return (
    <div>
      <div className="personalSec hobbies m-auto d-flex justify-content-center align-items-center">
        <div className="uptofront">
          <div className="row justify-content-center">
            <div className="col-md-5  m-3 text-center h3">
              <PoolIcon className="iconI"/>
              <div>Swimming</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
             <SportsEsportsIcon className="iconI"/>
              <div>Video games</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
              <SportsSoccerIcon className="iconI"/>
              <div>Soccer</div>
            </div>
            <div className="col-md-5  m-3 text-center h3">
              <LocalMoviesIcon className="iconI"/>
              <div>Watching shows</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;
