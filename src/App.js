import logo from './logo.svg';
import './App.css';
import PlayerList from "./Componants/Player.js"
import playerData from "./players.js"

function App() {
  return (
    <div className="App">
      <PlayerList players={playerData} />

    </div>
  );
}

export default App;
