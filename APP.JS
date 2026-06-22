function createaccount() {
  var userName = document.getElementById("sfullname");
  var userEmail = document.getElementById("semail");
  var userPassword = document.getElementById("spassword");

  if (!userName.value || !userEmail.value || !userPassword.value) {
    Swal.fire({
      icon: "error",
      title: "Missing Information",
      text: "Please fill in all fields.",
    });
    return;
  }

  localStorage.setItem("UserName", userName.value);
  localStorage.setItem("UserEmail", userEmail.value);
  localStorage.setItem("UserPassword", userPassword.value);

  Swal.fire({
    title: "Account Created Successfully",
    text: "You can now log in!",
    icon: "success",
  });

  userName.value = ''
  userEmail.value = ''
  userPassword.value = ''
}

function login() {
  var userEmail = document.getElementById("lemail");
  var userPassword = document.getElementById("lpassword");

  var storedEmail = localStorage.getItem("UserEmail");
  var storedPassword = localStorage.getItem("UserPassword");

  if (userEmail.value === storedEmail && userPassword.value === storedPassword) {

    Swal.fire({
      title: "Login Successful",
      text: "Welcome back!",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "welcome.html";
      }

      userPassword.value = ''
      userEmail.value = ''
    });

  } else {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: "Invalid email or password. Please try again!",
    });

    userPassword.value = ''
    userEmail.value = ''
  }



}