
import { useState } from 'react';
import './App.css';
import Tours from './Components/Tours';
import './data';
import data from './data';

function App() {
  let [toursData, setToursData] = useState(data);
  function intrestHandler(id){
    let newTour=toursData.filter((tour) => tour.id!==id);
    setToursData(newTour);
  } 
  function refreshTours(){
    setToursData(data);
  }
  if(toursData.length===0)
  {
    return (
      <div className='refresh'>
       <h1>No Tours Left </h1>
       <button className="ref" onClick={refreshTours}>Refresh</button>
        
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Plan With Amit</h1>
      <div className="tours-items">
        {
          toursData.map((tours) => {
            return <Tours key={tours.id} {...tours} intrestHandler={intrestHandler}/>
          })
        }

      </div>


      <div className="down"></div>
    </div>
  );
}

export default App;
