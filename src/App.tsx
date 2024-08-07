import { useEffect, useState } from "react";
import NavBar from "./components/navbar"
import Loading from "./components/loading";



function App() {
  const [clicked, setClicked] = useState(true);
  
  return (
    <div>
        {clicked ? (
          <Loading result={() => setClicked(false)} />
        ) : (
          <NavBar/>
        )}
    </div>
  )
}

export default App
