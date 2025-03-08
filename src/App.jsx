import { useState } from "react";
import "./App.css";
import data from './data';
import Tours from "./componenets/Tours";

function App() {

  const [tours, setTours] = useState(data);

  function removeHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeHandler={removeHandler}/>
    </div>
  );
}

export default App;
