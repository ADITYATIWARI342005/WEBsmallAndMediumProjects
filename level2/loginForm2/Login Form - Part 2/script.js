const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const input_name = document.getElementById('name').value;
  const input_email = document.getElementById('email').value;
  const input_pass = document.getElementById('pass').value;

  if (!nameVerification(input_name) || !emailVerification(input_email) || !passVerification(input_pass)) {
    alert("Fill the form correctly.");
  } else {
    alert('Form submitted successfully.');
  }
})
  
  
  function nameVerification(name) {
      return !/\d|@/.test(name);
    }

    function emailVerification(email) {
    const regex = /^[^\s@]+@codingninjas\.com$/;
    return regex.test(email);
  }

  
    function passVerification(pass) {
      return pass.length >= 8 && pass.includes('@');
    }