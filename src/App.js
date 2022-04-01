import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [apiData, setapiData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setapiData(data));
  },[])

  return (
    <div className="App">
     
      <br/>

      {
        apiData.map(data => 
        <div key={data.id}>
          Name: {data.name}<br/>
          username: {data.username}<br/>
          email: {data.email}<br/>
          <br/>
        </div>
        )
      }
    </div>
  );
}

export default App;
