document.getElementById("cardForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the form inputs
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var address = document.getElementById("addressInput").value;
    var phone = document.getElementById("phoneInput").value;
    var birthdate = document.getElementById("birthdateInput").value;
  
    // Create a new card object with user input
    var userCard = new Card(name, email, address, phone, birthdate);
  
    // Clear the form inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("addressInput").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("birthdateInput").value = "";
  
    // Print the user card
    userCard.printCard();
  });
  
  // Define the functions
  function printCard() {
    var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
    var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
    var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
    var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";
    var birthdateLine = "<strong>Birthdate: </strong>" + this.birthdate + "<hr>";
  
    // Create a new card container
    var cardContainer = document.createElement("div");
    cardContainer.classList.add("card");
    cardContainer.innerHTML = nameLine + emailLine + addressLine + phoneLine + birthdateLine;
  
    // Append the card to the output div
    var outputDiv = document.getElementById("output");
    outputDiv.appendChild(cardContainer);
  }
  
  function Card(name, email, address, phone, birthdate) {
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.birthdate = birthdate;
    this.printCard = printCard;
  }
   
  
