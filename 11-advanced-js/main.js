
var userChoices = {
  isCow: true,
  isColor: true,
  number: 1
}

function createAnimal(event) {
  
  var ctr;
  
  for(ctr=0; ctr < userChoices.number; ctr++ ) {
      
    // Create a variable for the new animal html element 
    var animal = document.createElement("img");
    
    // Specify where the image for the new element is located
    if (userChoices.isCow) {
      if (userChoices.isColor) {
        animal.src="/img/cow-1.jpg";        
      }
      else {
        animal.src="/img/cow-2.jpg";
      }
    }
    else {
      if (userChoices.isColor) {
        animal.src="/img/sheep-1.jpg";        
      }
      else {
        animal.src="/img/sheep-2.jpg";
      }
    }
    
    // Specify the CSS style properties
    animal.style.position = "fixed";
    animal.style.top = event.y + "px";
    animal.style.left = event.x + ctr*120 + "px";
    animal.style.width = "100px";
    
    // Add an event handler to allow animal to be removed
    animal.addEventListener("click", deleteAnimal, false); 
    
    // Add the animal variable to the document
    document.body.appendChild(animal);  
    
  }
  
}

function deleteAnimal(event) {
  var elem = event.target;
  elem.remove();
  event.stopPropagation();
}

function getKeyPress(event) {
  // These capture the 1, 2 or 3 keypress
  if(event.keyCode == 49) {
    userChoices.number = 1;
  }
  else if(event.keyCode == 50) {
    userChoices.number = 2;    
  }
  else if(event.keyCode == 51) {
    userChoices.number = 3;    
  }
  // These capture the c (cow) or s (sheep) keypress
  else if(event.keyCode == 99) {
    userChoices.isCow = true;    
  }
  else if(event.keyCode == 115) {
    userChoices.isCow = false;    
  }  
  // The black/white or color toggle on the t key
  else if(event.keyCode == 116) {
    if (userChoices.isColor==1) 
      userChoices.isColor = 0;    
    else
      userChoices.isColor = 1;    
  }  
  
}

function main() {

  // Before anything else, we add event handlers for click and keypress
  document.addEventListener("click", createAnimal, false);
  document.addEventListener("keypress", getKeyPress, false);  
  
}