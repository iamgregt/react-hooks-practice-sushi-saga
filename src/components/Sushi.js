import React, {useState} from "react";



function Sushi({sushi, onEat, isEaten, onCharge, onRefund}) {

  const [ate, setIsAte] = useState(false)

  function handleIsAte(sushi){
    setIsAte(!ate)
    if(!ate){
    onCharge(sushi.target.dataset.myval)
    }else if(ate){
      onRefund(sushi.target.dataset.myval)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsAte} data-myval={sushi.price}>
        {/* Tell me if this sushi has been eaten! */}
        {ate ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
            data-myval={sushi.price}
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
