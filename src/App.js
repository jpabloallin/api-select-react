import './App.css';
import FirstMenu from './components/FirstMenu';
import SecondMenu from './components/SecondMenu';

function App() {

  return (
    <div className="App">
      <div className="d-flex justify-content-around">
        <div>
          <FirstMenu/>
        </div>
        <div>
          <SecondMenu/>
        </div>
      </div>
    </div>
  );
}

export default App;
