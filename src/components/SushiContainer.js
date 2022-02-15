import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"


function SushiContainer({sushis, onLoadMore, onEat, isEaten, onCharge, onRefund}) {
  return (
    <div className="belt">
      {sushis.map((sushi) => {
        return <Sushi key={sushi.id} sushi={sushi} onEat={onEat} isEaten={isEaten} onCharge={onCharge} onRefund={onRefund} />
      })}
      <MoreButton onLoadMore={onLoadMore} />
    </div>
  );
}

export default SushiContainer;
