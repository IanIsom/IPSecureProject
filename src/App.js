import './App.css';
import JSONDATA from './Cars.json';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Car Information Project
        </p>
        <input
          type="text"
          placeholder="Search Cars"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {JSONDATA.filter((val) => {

          if (searchTerm === "" || val.id === null || val.lot.name === null  || val.lot.city === null || val.lot.country === null || val.make === null || val.model === null || val.year === null || val.vin === null || val.askingPrice === null || val.dealerCost === null || val.color === null || val.dateListed === null) {
            return;
          }
          else if (val.id.includes(searchTerm)) {
            return val;
          }
          else if (val.lot.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (val.lot.city.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (val.lot.country.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (val.make.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (val.model.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (String(val.year).includes(searchTerm)) {
            return val;
          }
          else if (val.vin.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (String(val.askingPrice).includes(searchTerm)) {
            return val;
          }
          else if (String(val.dealerCost).includes(searchTerm)) {
            return val;
          }
          else if (val.color.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
          else if (String(val.dateListed).includes(searchTerm)) {
            return val;
          }

        }).map((val, key) => {
          return <div className="cars" key={key}>{val.color} {val.make} {val.model} located at {val.lot.name} in {val.lot.city}, {val.lot.country}</div>
        })}

      </header>

    </div>
  );
}
export default App;
