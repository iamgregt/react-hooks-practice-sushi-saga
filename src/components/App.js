import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis?_page=1&_limit=4";



function App() {

  const [sushis, setSushis] = useState([])
  const [url, setUrl] = useState(API)

useEffect(() => {
  fetch(url)
  .then(r => r.json())
  .then(data => setSushis(data))
}, [url])

  return (
    <div className="app">
      <SushiContainer sushis={sushis} />
      <Table />
    </div>
  );
}

export default App;
