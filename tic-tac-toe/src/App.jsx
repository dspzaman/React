import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver.jsx";
import { WINNING_COMBINATIONS } from './winning-combinations.js';
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
function App() {
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
  });
  const [gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  let gameBoard = [...initialGameBoard.map((inArr)=>[...inArr])];
  let winner = null;
    for(const turn of gameTurn){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    for (const combination of WINNING_COMBINATIONS){
        const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
        const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
        const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

        if(
          firstSquareSymbol &&
          firstSquareSymbol === secondSquareSymbol &&
          firstSquareSymbol === thirdSquareSymbol
        ){
          winner = players[firstSquareSymbol];
        }
    }
    let hasDraw = gameTurn.length === 9 && !winner;
  function handleActivePlayer(rowIndex, colIndex){
    setActivePlayer((currActivePayer) => currActivePayer === 'X' ? 'O' : 'X');
    setGameTurn((prevTurns) => {
      let currentPlayer = 'X';
      if(prevTurns.length > 0 && prevTurns[0].player === 'X'){
        currentPlayer = 'O';
      }
      const updatedTurns = [{
        square:{row:rowIndex, col:colIndex}, player:currentPlayer
      },...prevTurns];

      return updatedTurns;
    });
  }
  function hadleRestart(){
    setGameTurn([]);
  }
  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevName => {
      return{
        ...prevName,
        [symbol]: newName
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X' } onChangeName={handlePlayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={handlePlayerNameChange}/>
        </ol>
        
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={hadleRestart}/>}
        <GameBoard onSelectSuqare={handleActivePlayer} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  )
}

export default App
