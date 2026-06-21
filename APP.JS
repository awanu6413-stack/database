function createaccount() {
  var userName = document.getElementById("sfullname");
  var userEmail = document.getElementById("semail");
  var userPasswaord = document.getElementById("spassword");

  localStorage.setItem("UserName", userName.value);
  localStorage.setItem("UserEmail", userEmail.value);
  localStorage.setItem("UserPassword", userPasswaord.value);

  Swal.fire({
    title: "Account Created Successfully",
    text: "You clicked the button!",
    icon: "success",
  });
}


function login() {
  var userEmail = document.getElementById("lemail");
  var userPasswaord = document.getElementById("lpassword");

  var storedEmail = localStorage.getItem("UserEmail");
  var storedPassword = localStorage.getItem("UserPassword");

  if (userEmail.value == storedEmail && userPasswaord.value == storedPassword) {
    Swal.fire({
  title: "Logi",
  text: "You clicked the button!",
  icon: "success"
});
  
  } else {
    
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
 
});
    
}}