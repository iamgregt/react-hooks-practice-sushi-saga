import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";





function App() {

  const [sushis, setSushis] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [isEaten, setIsEaten] = useState(false)
  console.log(pageNum)



useEffect(() => {
  
  fetch(`http://localhost:3001/sushis?_page=${pageNum}&_limit=4`)
  .then(r => r.json())
  .then(data => setSushis(data))
}, [pageNum])

function loadMoreSushi(){
  setPageNum(pageNum => pageNum + 1)
}

function handleIsEaten(sushi){
  setIsEaten(!isEaten)
}

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onLoadMore={loadMoreSushi} onEat={handleIsEaten} isEaten={isEaten} />
      <Table />
    </div>
  );
}

export default App;
