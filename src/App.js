import IndexRouter from './router/IndexRouter'
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
    <IndexRouter/>
  );
}

export default App;
