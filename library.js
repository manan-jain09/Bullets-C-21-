function hascollided(object, object1) {
    objectRightEdge = object.x + object.width;
    object1LeftEdge = object1.x;
    if (objectRightEdge >= object1LeftEdge) {
      return true;
      object.velocityX = 0;
        object1.velocityX = 0; 
    } else {
      return false;
    }
  }
  function collided(object, object1) {
  if (object.x - object1.x < object1.width / 2 + object.width / 2 
    && object1.x - object.x < object.width / 2 + object1.width / 2 
    && object.y - object1.y < object1.height / 2 + object.height / 2 
    && object1.y - object.y < object.height / 2 + object1.height / 2) { 
        return true;
        object.velocityX = 0;
        object1.velocityX = 0; 
    } else {
      return false;
    }
  } 