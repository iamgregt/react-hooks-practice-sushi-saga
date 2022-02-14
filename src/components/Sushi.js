import React, {useState} from "react";



function Sushi({sushi, onEat, isEaten}) {

  const [ate, setIsAte] = useState(false)

  function handleIsAte(){
    setIsAte(!ate)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleIsAte}>
        {/* Tell me if this sushi has been eaten! */}
        {ate ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
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
