import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";





function App() {

  const [sushis, setSushis] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [isEaten, setIsEaten] = useState(false)
  const [cash, setCash] = useState(100)
  console.log(pageNum)



useEffect(() => {
  
  fetch(`http://localhost:3001/sushis?_page=${pageNum}&_limit=4`)
  .then(r => r.json())
  .then(data => setSushis(data))
}, [pageNum])

function loadMoreSushi(){
  setPageNum(pageNum => pageNum + 1)
}

function handleIsEaten(){
  setIsEaten(!isEaten)
}

function handleChargeCustomer(price){
  if(cash >= price){
  setCash(cash => cash - price)
  }else{
    console.log("OUT OF MONEY")
  }
}

function handleRefund(price){
console.log(cash)
console.log(price)
}

  return (
    <div className="app">
      <SushiContainer sushis={sushis} onLoadMore={loadMoreSushi} onEat={handleIsEaten} isEaten={isEaten} onCharge={handleChargeCustomer} onRefund={handleRefund} />
      <Table cash={cash} />
    </div>
  );
}

export default App;
