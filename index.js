let scruberHq =42
function distanceFromHqInBlocks(blocks){
     return Math.abs (scruberHq - blocks);

  }
  function distanceFromHqInFeet(feet){
    return Math.abs((scruberHq - feet) * 264);
  }

  function distanceTravelledInFeet(num1, num2){
    return Math.abs((num1 - num2) * 264);
  }
  function calculatesFarePrice(start,destination){
    let distance = Math.abs(destination - start) *264;
        if(distance < 400){
            return 0;
        }else if(distance < 2000){
            return 0.02 * (distance - 400) ;
        } else if(distance < 2500){
            return 25;
        }else if(distance > 2500){
            return 'cannot travel that far';
        }
  }