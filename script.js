function handleSubmit(event) {
  event.preventDefault(); 
  
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nEmail: " + email);

}

var submitButton = document.getElementById("contactForm").addEventListener("submit", handleSubmit);