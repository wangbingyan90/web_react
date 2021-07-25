import Child from './Child'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios'

function App() {

  useEffect(() => {
    axios.get("/api/sars/toheros").then(
      res=>{
        console.log('assad')
        console.log(res.data)
      }
    )

  }, [])

  return (
    <div>
      app
      <ul>
        <li>
          11111
        </li>
        <li>
          2222
        </li>
      </ul>
      <Child />
    </div>
  );
}

export default App;
