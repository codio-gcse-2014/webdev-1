
function createAnimal(event) {
  
    // Create a variable for the new animal html element 
    var animal = document.createElement("img");
    
    // Specify where the image for the new element is located
    animal.src="/img/cow-1.jpg";        
    
    // Specify the CSS style properties
    animal.style.width = "100px";
    animal.style.position = "fixed";
    animal.style.top = event.y + "px";
    animal.style.left = event.x + "px";

        
    // Add the animal variable to the document
    document.body.appendChild(animal);
  
}

function main() {

  // Add event handlers for the 'click' event
  document.addEventListener("click", createAnimal, false);
  
}