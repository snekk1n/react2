import Screen from './Components/Screen';
import Keyboard from "./Components/Keyboard";


function App() {
  return (
      <div className={'container'}>
        <div className={'calculate'}>
          <Screen/>
          <Keyboard/>
        </div>
      </div>
  );
}

export default App;
