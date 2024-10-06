import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetime={1} />
        <TimerChallenge title="Not Easy" targetime={5} />
        <TimerChallenge title="Getting Tough" targetime={10} />
        <TimerChallenge title="Pros Only" targetime={15} />
      </div>
    </>
  );
}

export default App;
