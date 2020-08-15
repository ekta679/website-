var x = document.getElementById("password");
      function myFunction() {
            if (x.type === "password") {
                x.type = "text";
            } else {
                x.type = "password";
            }
        }