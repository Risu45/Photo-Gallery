
import Navbar from "./Components/Navbar";
import Button from "./Components/Button";
import Grid from "./Components/Grid";
import { useEffect, useState } from "react";
import axios  from "axios";
function App() {
 
  const[photos,setphotos]=useState([])
  const[updateUI,setupdateUI]=useState("")
  useEffect(()=>{
    axios.get("http://localhost:5000/api/get")
    .then((res)=>{
      console.log(res.data);
      setphotos(res.data)
    })
    .catch((err)=>console.log(err))
  },[updateUI])
  return (
    <div className="App">
   <  Navbar/>
   <Grid photos={photos}/>
   <Button  setupdateUI={setupdateUI}/>
    </div>
  );
}

export default App;
