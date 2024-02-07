import './App.css';
import { useState } from 'react';

function App() {

    const [age , setAge] = useState(0);
  
    return (
            <div className="App"> 
              <button onClick={() => {
                  setAge(age + 1)
              }}> Increase</button>

            <button onClick={() => {
                  setAge(age - 1)
              }}> Decrease</button>

            <button onClick={() => {
                      setAge(0)
                  }}> Set to Zero</button>
                  <p>{age}</p>
            </div>
    );

}


export default App;
