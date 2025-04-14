import './App.css'
import ScoreButtons from './ScoreButtons'
import Possession from './Possession';
import CountdownTimer from './Timer';
import EditableTeamName from './EditableTeamName';
import Bonus from './Bonus';
import Fouls from './Fouls';
import ShotClock from './ShotClock';
import TeamStandings from './Standings';


function App() {

  return (
    <>
      <div className="grid-container">
            <EditableTeamName defaultName="Team A" side="left"/>
            <CountdownTimer />
            <EditableTeamName defaultName="Team B" side="right"/> 
            <ScoreButtons side="score1"/>
            <Possession/>
            <ScoreButtons side="score2"/>
            <Fouls side="foul1"/>
            <Bonus side="bonus1"/>
            <Bonus side="bonus2"/>
            <Fouls side="foul2"/>
            <ShotClock />
            <TeamStandings />
      </div>
    </>
  );
}

export default App
