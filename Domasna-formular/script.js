
window.onload = function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      console.log('Name', firstName);
      console.log('Surname', lastName);
      console.log('E-mail', email);
      console.log('Password:', password);
    });
  };
 

      

 