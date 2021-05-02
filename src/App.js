import './App.css';
import SearchBar from './search';
import JSONDATA from './Cars.json';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Car Information Project
          <SearchBar />
          {JSONDATA.map((val, key) => {
            return <div>{val.id}</div>
          })}
        </p>
      </header>
      
    </div>
  );
}



export default App;
